
import { chromium, Browser, Page } from 'playwright';
import { readFileSync } from 'fs';

export interface RecruitmentData {
  name?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone: string;
  prefix: string;
  salary?: string;
  linkedin?: string;
  github?: string;
  about?: string;
  start?: string;
  cvPath?: string;
  city?: string;
}

class RecruitmentScraper {
    async uploadFileIfExists(selector: string, filePath: string) {
      if (!this.page || !filePath) return;
      try {
        await this.page.setInputFiles(selector, filePath);
      } catch (e) {}
    }
  browser: Browser | null = null;
  page: Page | null = null;

  async init() {
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();
  }

  async fillIfExists(field: string, value?: string) {
    if (!this.page || !value) return;
    const selectors = [
      `input[name=\"${field}\"]`,
      `textarea[name=\"${field}\"]`,
      `input[data-sid=\"${field}\"]`,
      `textarea[data-sid=\"${field}\"]`
    ];
    for (const selector of selectors) {
      try {
        await this.page.waitForSelector(selector, { timeout: 2000 });
        await this.page.$eval(selector, el => el.scrollIntoView({ behavior: 'smooth', block: 'center' }));
        await this.page.click(selector, { force: true });
        await this.page.fill(selector, value, { force: true });
        break;
      } catch (e) {
        // Selector not found, try next
      }
    }
  }

  async fillForm(url: string, configData: RecruitmentData) {
    if (!this.page) return "Page not initialized";
    await this.page.goto(url);

    const fieldMap: { [K in keyof RecruitmentData]?: string[] } = {
      name: ['name', 'full_name', 'fullName'],
      firstName: ['first_name', 'firstName'],
      lastName: ['last_name', 'lastName'],
      email: ['email'],
      phone: ['phone', 'mobile'],
      prefix: ['prefix', 'country'],
      salary: ['salary'],
      linkedin: ['linked_in_url', 'linkedin_url', 'linkedin_in_url'],
      github: ['repository_url', 'github_url', 'git'],
      about: ['about', 'about_you', 'tell_us_about_yourself', 'candidate_about'],
      city: ['city', 'location', 'miasto'],
    };

    for (const [configKey, value] of Object.entries(configData)) {
      if (!value) continue;
      const inputNames = fieldMap[configKey as keyof RecruitmentData] || [configKey];
      for (const inputName of inputNames) {
        const inputExists = await this.page.$(`input[name="${inputName}"]`);
        const textareaExists = await this.page.$(`textarea[name="${inputName}"]`);
        const inputSidExists = await this.page.$(`input[data-sid="${inputName}"]`);
        const textareaSidExists = await this.page.$(`textarea[data-sid="${inputName}"]`);
        if (inputExists || textareaExists || inputSidExists || textareaSidExists) {
          console.log(`Wypełniam pole: ${inputName} wartością: ${value}`);
          await this.fillIfExists(inputName, value);
          break;
        } else {
          console.log(`Nie znaleziono input/textarea o name/data-sid: ${inputName}`);
        }
      }
    }

    // // Upload CV (input file)
    // if (data.cvPath) {
    //   // Szukaj inputa file po typie lub id
    //   if (await this.page.$('input[type="file"]')) {
    //     await this.uploadFileIfExists('input[type="file"]', data.cvPath);
    //   } else if (await this.page.$('#file-input')) {
    //     await this.uploadFileIfExists('#file-input', data.cvPath);
    //   }
    // }

  }

  async close() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

async function main() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const portfolioConfig = JSON.parse(readFileSync(__dirname + '/config.json', 'utf-8'));
  const url = 'HERE_LINK';
  const scraper = new RecruitmentScraper();
  await scraper.init();
  await scraper.fillForm(url, portfolioConfig);
  // await scraper.close(); // Odkomentuj, jeśli chcesz zamykać przeglądarkę po zakończeniu
}

main();
