# 📧 Konfiguracja Formspree - Instrukcja krok po kroku

## 1️⃣ Załóż konto Formspree (darmowe)

**UWAGA:** Formspree ma nowy interfejs - nie potrzebujesz konta na początku!

### Sposób 1: Bez rejestracji (najprostszy)
1. Przejdź bezpośrednio do kroku 2 (stwórz formularz)
2. Wyślij pierwszą wiadomość testową
3. Formspree automatycznie wyśle email z linkiem aktywacyjnym
4. Kliknij link w emailu → formularz aktywny!

### Sposób 2: Z rejestracją
1. Wejdź na: https://formspree.io/
2. Kliknij **Get Started** (lub **Sign Up**)
3. Wybierz **Sign up with Email** lub **Continue with GitHub**
4. Wypełnij dane i potwierdź email

---

## 2️⃣ Stwórz nowy formularz

1. W Dashboard kliknij: **+ New Form**
2. Nazwa: `Portfolio Contact Form`
3. Email: **kas.elzbieciak@gmail.com** (tu będą przychodzić wiadomości)
4. Kliknij **Create Form**

---

## 3️⃣ Skopiuj Form ID

Po utworzeniu formularza zobaczysz **Form Endpoint**:
```
https://formspree.io/f/YOUR_FORM_ID
```

Skopiuj **YOUR_FORM_ID** (np. `xpznkqvw`)

---

## 4️⃣ Dodaj Form ID do kodu

Otwórz plik: `src/src/components/Contact.tsx`

Znajdź linię:
```typescript
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
```

Zamień `YOUR_FORM_ID` na swój ID:
```typescript
const response = await fetch("https://formspree.io/f/xpznkqvw", {
```

---

## 5️⃣ Konfiguracja formularza (opcjonalnie)

W Formspree Dashboard możesz ustawić:

### **Settings → General:**
- ✅ **Notification Email**: kas.elzbieciak@gmail.com
- ✅ **Subject Line**: `Nowa wiadomość z portfolio`

### **Settings → Spam Protection:**
- ✅ **reCAPTCHA**: Włączone (domyślnie)
- ✅ **Honeypot**: Włączone (ukryte pole antyspamowe)

### **Settings → Confirmations:**
- ✅ **Redirect URL**: Możesz ustawić stronę "Dziękujemy" (opcjonalnie)
- ✅ **Autoresponder**: Automatyczna odpowiedź do wysyłającego (opcjonalnie)

---

## 6️⃣ Testowanie lokalnie

```powershell
cd src
npm run dev
```

1. Otwórz: http://localhost:3000
2. Przejdź do sekcji **Kontakt**
3. Wyślij testową wiadomość
4. Sprawdź email **kas.elzbieciak@gmail.com**
5. Potwierdź pierwszy email od Formspree (antispam)

---

## 7️⃣ Deployment na GitHub Pages

```powershell
cd src
npm run build
npx gh-pages -d build
```

**Gotowe!** Formspree automatycznie akceptuje requesty z każdej domeny (bezpieczne, bo masz spam protection).

---

## 🔒 Bezpieczeństwo Formspree

**Dlaczego to jest bezpieczniejsze niż EmailJS:**

✅ **Brak kluczy API w kodzie** - Form ID nie jest tajne  
✅ **Wbudowana ochrona antyspam** - reCAPTCHA + honeypot  
✅ **50 submisji/miesiąc** - limit FREE (wystarczy dla portfolio)  
✅ **Brak ryzyka nadużycia** - nawet jeśli ktoś skopiuje form ID, tylko Ty dostajesz maile  

---

## 📊 Limity Formspree (darmowy plan)

- ✅ **50 submisji/miesiąc**
- ✅ **Unlimited forms**
- ✅ **Spam filtering** (reCAPTCHA)
- ✅ **Email notifications**
- ❌ Brak file uploads (ale to niepotrzebne)
- ❌ Brak AJAX submissions archive (ale email dostaniesz)

---

## 🎯 Gotowe!

Po konfiguracji:
1. Ludzie mogą wysyłać Ci wiadomości przez formularz
2. Dostajesz je na **kas.elzbieciak@gmail.com**
3. **Zero kluczy API** - całkowicie bezpieczne
4. Wbudowana ochrona przed spamem

---

## 🐛 Troubleshooting

**Problem:** "Form not found"
- **Rozwiązanie:** Sprawdź czy `YOUR_FORM_ID` w kodzie jest poprawny

**Problem:** Wiadomości nie dochodzą
- **Rozwiązanie:** 
  1. Sprawdź spam w Gmail
  2. Potwierdź pierwszy email od Formspree (aktywacja)
  3. Sprawdź Formspree Dashboard → Submissions

**Problem:** "Limit exceeded"
- **Rozwiązanie:** Wyczerpałaś 50 submisji/miesiąc - zaczekaj do nowego miesiąca lub upgrade

**Problem:** Spam submissions
- **Rozwiązanie:** Włącz reCAPTCHA w Formspree settings (już włączone domyślnie)

---

## 🚀 Upgrade (opcjonalnie)

**Gold Plan ($10/month):**
- 1,000 submisji/miesiąc
- File uploads
- Advanced spam filtering
- Custom redirects

**Nie potrzebujesz tego dla portfolio!** Free plan wystarczy. 😊

---

Powodzenia! 🎉
