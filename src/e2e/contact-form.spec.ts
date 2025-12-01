import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/jsts_developer_6yrs/');
    await page.waitForLoadState('networkidle');
    const contactHeading = page.getByRole('heading', { name: /contact|kontakt/i });
    await contactHeading.waitFor({ state: 'visible', timeout: 10000 });
    await contactHeading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
  });

  test('should not show undefined errors when filling form', async ({ page }) => {
    const nameInput = page.locator('input[name="name"]');
    const emailInput = page.locator('input[name="email"]');
    const messageTextarea = page.locator('textarea[name="message"]');

    await nameInput.waitFor({ state: 'visible' });
    
    await nameInput.click();
    await nameInput.fill('K');
    await emailInput.click();
    await page.waitForTimeout(500);
    
    let pageContent = await page.content();
    expect(pageContent).not.toContain('undefined');
    expect(pageContent).not.toContain('expected string, received undefined');

    await nameInput.click();
    await nameInput.fill('Kasia Johnson');
    await emailInput.click();
    await page.waitForTimeout(500);

    await emailInput.fill('test');
    await messageTextarea.click();
    await page.waitForTimeout(500);

    pageContent = await page.content();
    expect(pageContent).not.toContain('undefined');

    await emailInput.click();
    await emailInput.fill('kasia.johnson@example.com');
    await messageTextarea.click();
    await page.waitForTimeout(500);

    await messageTextarea.fill('Short');
    await nameInput.click();
    await page.waitForTimeout(500);

    pageContent = await page.content();
    expect(pageContent).not.toContain('undefined');

    await messageTextarea.click();
    await messageTextarea.fill('This is a comprehensive test message that definitely exceeds the minimum character requirement');
    await page.click('body');
    await page.waitForTimeout(1500);

    const errorTexts = await page.locator('.text--error').allTextContents();
    const nonEmptyErrors = errorTexts.filter(text => text.trim().length > 0);
    
    if (nonEmptyErrors.length > 0) {
      console.log('Remaining non-empty errors:', nonEmptyErrors);
      expect(nonEmptyErrors.length).toBe(0);
    }
  });

  test('should submit form and send request to Formspree API', async ({ page }) => {
    let formspreeRequestBody: any = null;
    
    await page.route('https://formspree.io/**', async (route) => {
      formspreeRequestBody = route.request().postDataJSON();
      
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true }),
      });
    });

    const nameInput = page.locator('input[name="name"]');
    const emailInput = page.locator('input[name="email"]');
    const messageTextarea = page.locator('textarea[name="message"]');

    await nameInput.waitFor({ state: 'visible' });
    await nameInput.fill('Jan Kowalski');
    await emailInput.fill('jan.kowalski@example.com');
    await messageTextarea.fill('This is a test contact message from the form.');

    await page.getByRole('button', { name: /send|wyślij/i }).click();

    await page.waitForTimeout(2000);

    expect(formspreeRequestBody).toBeDefined();
    expect(formspreeRequestBody.name).toBe('Jan Kowalski');
    expect(formspreeRequestBody.email).toBe('jan.kowalski@example.com');
    expect(formspreeRequestBody.message).toBe('This is a test contact message from the form.');

    await expect(page.locator('text=/message sent|wiadomość wysłana/i')).toBeVisible({ timeout: 5000 });
  });

  test('should clear form after successful submission', async ({ page }) => {
    await page.route('https://formspree.io/**', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true }),
      });
    });

    const nameInput = page.locator('input[name="name"]');
    const emailInput = page.locator('input[name="email"]');
    const messageTextarea = page.locator('textarea[name="message"]');

    await nameInput.waitFor({ state: 'visible' });
    await nameInput.fill('Test User');
    await emailInput.fill('test@example.com');
    await messageTextarea.fill('Test message with enough characters');

    await page.getByRole('button', { name: /send|wyślij/i }).click();

    await page.waitForTimeout(2000);

    await expect(nameInput).toHaveValue('');
    await expect(emailInput).toHaveValue('');
    await expect(messageTextarea).toHaveValue('');
  });
});
