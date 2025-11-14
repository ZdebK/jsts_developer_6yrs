import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pl" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  pl: {
    // Personal / contact
    "hero.name": "Katarzyna Elżbieciak",
    "person.email": "kas.elzbieciak@gmail.com",
    "person.phone": "+48 888 435 618",
    "person.location": "Kraków, Domgały 41a",

    // Navigation
    "nav.about": "O mnie",
    "nav.experience": "Doświadczenie",
    "nav.education": "Edukacja",
    "nav.skills": "Umiejętności",
    "nav.projects": "Projekty",
    "nav.contact": "Kontakt",

    // Hero
    "hero.title": "Full Stack Developer",
    "hero.location": "Kraków, Polska",
    "hero.description": "Pasjonat programowania z doświadczeniem w tworzeniu nowoczesnych aplikacji webowych. Specjalizuję się w TypeScript i Node.js.",
    "hero.contact": "Kontakt",

    // Experience
    "exp.title": "Doświadczenie",
    "exp.senior": "Software Developer - Specialist",
    "exp.full": "Software Developer - Intern",
    "exp.frontend": "Frontend Developer",
    "exp.company1": "Calix Technology Poland",
    "exp.company2": "Delphi Technologies",
    "exp.company3": "Digital Agency",
    "exp.period1": "Jan 2019 - Aug 2025",
    "exp.period2": "Sep 2017 - Oct 2018",
    "exp.period3": "2018 - 2020",
    "exp.desc1.1": "JavaScript, TypeScript, PlanckJS (Angular-like framework), SQL",
    "exp.desc1.2": "Delivered full-stack features across frontend and backend, ensuring high-quality and maintainable code.",
    "exp.desc1.3": "Participated in Agile methodology: sprint planning, daily stand-ups, retrospectives.",
    "exp.desc1.4": "Implementing clean code based on design patterns and coding standards; experience with GIT and CI/CD.",
    "exp.desc1.5": "Designed and implemented end-to-end automated tests using Puppeteer; created load and performance testing scripts with JMeter and k6.",
    "exp.desc1.6": "Provided client-facing support, resolving production issues and offering technical guidance under time pressure.",
    "exp.desc2.1": "Java, Angular; Microsoft Cognitive Services API",
    "exp.desc2.2": "Developed a PoC Angular web app for Face Recognition login using Microsoft Cognitive Services API.",
    "exp.desc2.3": "Built a Skype/Slack chatbot for business use cases.",
    "exp.desc3.1": "Tworzenie responsywnych stron internetowych",
    "exp.desc3.2": "Implementacja designów z Figma/Adobe XD",
    "exp.desc3.3": "Optymalizacja SEO i wydajności",

    // Education
    "edu.title": "Edukacja",
    "edu.master": "Magister (Mgr), Informatyka Stosowana — Systemy Inteligentne",
    "edu.bachelor": "Licencjat (Lic.), Informatyka stosowana",
    "edu.school": "Uniwersytet Ekonomiczny w Krakowie",
    "edu.master.spec": "Systemy Inteligentne",
    "edu.bachelor.spec": "Inżynieria Oprogramowania",
    "edu.period1": "paź 2018 – wrz 2020",
    "edu.period2": "paź 2015 – wrz 2018",
    "edu.certs": "Certyfikaty",

    // Skills
    "skills.title": "Umiejętności",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.devops": "DevOps & Tools",
    "skills.other": "Inne",

    // Projects
    "projects.title": "Projekty",
    "projects.mes.title": "🏭 Platforma MES",
    "projects.mes.desc": "Rozwój aplikacji typu MES (Manufacturing Execution System) służącej do monitorowania procesów produkcyjnych i zarządzania zasobami w czasie rzeczywistym. System zbudowany z użyciem Node.js i PostgreSQL, z frontendem opartym o HTML i CSS.",
    "projects.puppeteer.title": "🤖 Framework do automatycznych testów",
    "projects.puppeteer.desc": "Rozwój frameworka do automatycznych testów aplikacji Node.js przy użyciu Puppeteer oraz Cucumber. Projekt umożliwia automatyczne testowanie UI, generowanie raportów i integrację z pipeline'ami CI/CD.",
    "projects.aws.title": "☁️ AWS SiteScan Plugin",
    "projects.aws.desc": "Projekt hackathonowy — plugin analizujący i weryfikujący poprawność konfiguracji stron internetowych hostowanych w środowisku AWS. Narzędzie automatycznie sprawdza status usług, dostępność oraz bezpieczeństwo.",
    "projects.zus.title": "🧓 Aplikacja Emerytalna ZUS",
    "projects.zus.desc": "Hackathonowa aplikacja webowa umożliwiająca szybkie sprawdzenie przewidywanej emerytury na podstawie danych użytkownika. Interfejs zbudowany w React, a logika oparta na prostym backendzie z HTML i CSS.",
    "projects.ai.title": "🎨 Aplikacja autorska AI",
    "projects.ai.desc": "Strona internetowa generująca projekty i komponenty UI na podstawie szkiców z Figma, wspomagana przez narzędzia AI. Backend oparty o Node.js, frontend w React, z naciskiem na automatyzację i responsywność.",
    "projects.shop.title": "👟 Sklep obuwniczy",
    "projects.shop.desc": "Nowoczesna strona internetowa dla sklepu obuwniczego z możliwością przeglądania kolekcji, filtrowania produktów oraz realizacji zamówień online. System posiada panel administracyjny do zarządzania ofertą i integrację z płatnościami online (Stripe). Projekt zbudowany na platformie WordPress.",

    // Contact
    "contact.title": "Kontakt",
    "contact.subtitle": "Masz projekt lub propozycję współpracy? Skontaktuj się ze mną!",
    "contact.email": "Email",
    "contact.phone": "Telefon",
    "contact.location": "Lokalizacja",
    "contact.name": "Imię",
    "contact.message": "Wiadomość",
    "contact.send": "Wyślij wiadomość",
    "contact.placeholder.name": "Json Rekruter",
    "contact.placeholder.email": "jan.kowalski@example.com",
    "contact.placeholder.message": "Twoja wiadomość...",
    "contact.success": "Wiadomość wysłana! Odezwę się wkrótce 🚀",
    "contact.error": "Błąd wysyłki. Spróbuj ponownie lub napisz bezpośrednio na kas.elzbieciak@gmail.com",

    // Footer
    "footer.made": "Stworzone z",
    "footer.and": "i React",
    "footer.rights": "Wszystkie prawa zastrzeżone.",
    "footer.designed": "Zaprojektowane w stylu VS Code",

    // Chat
    "chat.greeting": "Drogi Rekruterze! 👋",
    "chat.message": "To prawdopodobnie najlepszy kandydat, jakiego możesz znaleźć. Nie przegap tej okazji i zaproś na rozmowę!",
    "chat.question": "Gdzie chcesz się przenieść?",
    "chat.close": "Zamknij",
  },
  en: {
    // Personal / contact
    "hero.name": "Katarzyna Elżbieciak",
    "person.email": "kas.elzbieciak@gmail.com",
    "person.phone": "+48 888 435 618",
    "person.location": "Kraków, Domgały 41a",

    // Navigation
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Full Stack Developer",
    "hero.location": "Cracow, Poland",
    "hero.description": "Programming enthusiast with experience in creating modern web applications. I specialize in TypeScript and Node.js.",
    "hero.contact": "Contact",

    // Experience
    "exp.title": "Experience",
    "exp.senior": "Senior Full Stack Developer",
    "exp.full": "Full Stack Developer",
    "exp.frontend": "Frontend Developer",
    "exp.company1": "Tech Company Ltd.",
    "exp.company2": "Startup XYZ",
    "exp.company3": "Digital Agency",
    "exp.period1": "2022 - present",
    "exp.period2": "2020 - 2022",
    "exp.period3": "2018 - 2020",
    "exp.desc1.1": "Designing and implementing scalable web applications",
    "exp.desc1.2": "Team collaboration using Agile/Scrum methodology",
    "exp.desc1.3": "Mentoring junior developers",
    "exp.desc1.4": "Application performance optimization",
    "exp.desc2.1": "Development and maintenance of SaaS applications",
    "exp.desc2.2": "RESTful API implementation",
    "exp.desc2.3": "Integration with external services",
    "exp.desc2.4": "Writing unit and E2E tests",
    "exp.desc3.1": "Creating responsive websites",
    "exp.desc3.2": "Implementing designs from Figma/Adobe XD",
    "exp.desc3.3": "SEO and performance optimization",

    // Education
    "edu.title": "Education",
    "edu.master": "Master (MSc), Applied Computer Science — Intelligent Systems",
    "edu.bachelor": "Bachelor (BSc), Applied Computer Science",
    "edu.school": "Cracow University of Economics",
    "edu.master.spec": "Intelligent Systems",
    "edu.bachelor.spec": "Software Engineering",
    "edu.period1": "Oct 2018 – Sep 2020",
    "edu.period2": "Oct 2015 – Sep 2018",
    "edu.certs": "Certifications",

    // Skills
    "skills.title": "Skills",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.devops": "DevOps & Tools",
    "skills.other": "Other",

    // Projects
    "projects.title": "Projects",
    "projects.mes.title": "🏭 MES Application",
    "projects.mes.desc": "Development of MES (Manufacturing Execution System) application for monitoring production processes and managing resources in real-time. System built with Node.js and PostgreSQL, with a frontend based on HTML and CSS.",
    "projects.puppeteer.title": "🤖 Puppeteer Test Framework",
    "projects.puppeteer.desc": "Development of a framework for automated testing of Node.js applications using Puppeteer and Cucumber. The project enables automatic UI testing, report generation, and CI/CD pipeline integration.",
    "projects.aws.title": "☁️ AWS SiteScan Plugin",
    "projects.aws.desc": "Hackathon project — a plugin that analyzes and verifies the correctness of website configurations hosted in AWS environment. The tool automatically checks service status, availability, and security.",
    "projects.zus.title": "🧓 ZUS Retirement App",
    "projects.zus.desc": "Hackathon web application that enables quick checking of predicted retirement based on user data. Interface built in React, with logic based on a simple backend with HTML and CSS.",
    "projects.ai.title": "🎨 AI Website Builder",
    "projects.ai.desc": "Website that generates UI projects and components based on Figma sketches, supported by AI tools. Backend based on Node.js, frontend in React, with emphasis on automation and responsiveness.",
    "projects.shop.title": "👟 Shoe Shop",
    "projects.shop.desc": "Modern website for a shoe store with the ability to browse collections, filter products, and place online orders. System has an admin panel for managing offers and integration with online payments (Stripe). Project built on the WordPress platform.",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Have a project or collaboration proposal? Get in touch!",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.name": "Name",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.placeholder.name": "Json Recruiter",
    "contact.placeholder.email": "john.smith@example.com",
    "contact.placeholder.message": "Your message...",
    "contact.success": "Message sent! I'll get back to you soon 🚀",
    "contact.error": "Send error. Try again or email me directly at kas.elzbieciak@gmail.com",

    // Footer
    "footer.made": "Made with",
    "footer.and": "and React",
    "footer.rights": "All rights reserved.",
    "footer.designed": "Designed in VS Code style",

    // Chat
    "chat.greeting": "Dear Recruiter! 👋",
    "chat.message": "This is probably the best candidate you can find. Don't miss this opportunity and invite them for an interview!",
    "chat.question": "Where would you like to go?",
    "chat.close": "Close",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pl");

  const t = (key: string): string => {
    const langMap = translations[language] || {};
    if (Object.prototype.hasOwnProperty.call(langMap, key)) {
      return langMap[key];
    }
    // fallback to English if available
    const fallback = translations.en || {};
    if (Object.prototype.hasOwnProperty.call(fallback, key)) {
      return fallback[key];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
