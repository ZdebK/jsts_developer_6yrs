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
    "exp.senior": "Software Developer - Specjalista",
    "exp.full": "Software Developer - Praktykant",
    "exp.frontend": "Frontend Developer",
    "exp.intern": "Praktykant",
    "exp.company1": "Calix Technology Poland",
    "exp.company2": "Delphi Technologies",
    "exp.company3": "Abventor",
    "exp.period1": "Sty 2019 - Sie 2025",
    "exp.period2": "Wrz 2017 - Paź 2018",
    "exp.period3": "Sie 2017 - Wrz 2017",
    "exp.desc1.1": "Realizacja funkcjonalności full-stack (frontend i backend) z naciskiem na czysty, łatwy w utrzymaniu i skalowalny kod, poprawiający stabilność systemu i doświadczenie użytkownika.",
    "exp.desc1.2": "Projektowanie i wdrażanie optymalizacji wydajności, skracających czas ładowania i poprawiających responsywność kluczowych modułów.",
    "exp.desc1.3": "Budowa automatycznych testów end-to-end (Puppeteer) oraz zestawów testów wydajnościowych (k6, JMeter), przyczyniających się do większej pewności przy wydaniach i mniejszej liczby regresji.",
    "exp.desc1.4": "Aktywna współpraca z klientami i zespołami międzyfunkcyjnymi, tłumaczenie potrzeb biznesowych na rozwiązania techniczne z empatią dla przepływów pracy i UX użytkowników.",
    "exp.desc1.5": "Udział w ceremoniach Agile (planowanie, daily stand-up, retrospektywy), wspierających płynną komunikację i przewidywalne dostarczanie funkcjonalności.",
    "exp.desc1.6": "Tworzenie i optymalizacja procesów CI/CD oraz stosowanie dobrych praktyk kontroli wersji, co przyspieszyło wdrożenia i zwiększyło produktywność zespołu.",
    "exp.desc1.7": "Wsparcie faz go-live systemów MES dla międzynarodowych klientów, rozwiązywanie krytycznych problemów pod presją czasu i zapewnienie pomyślnego uruchomienia produkcyjnego.",
    "exp.desc1.8": "Wykorzystanie narzędzi AI (GitHub Copilot, Cloud Code, ChatGPT) do eksploracji nowych konceptów, debugowania złożonych problemów i prototypowania funkcjonalności frontend — w tym pełnych stron React.",
    "exp.desc1.9": "Mentoring młodszych developerów i usprawnienie procesu onboardingu.",
    "exp.desc2.1": "Rozwój proof-of-concept aplikacji webowej Angular do logowania opartego na rozpoznawaniu twarzy z użyciem Microsoft Cognitive Services, eksploracja wczesnych zastosowań AI w przepływach uwierzytelniania.",
    "exp.desc2.2": "Budowa wewnętrznego chatbota dla Skype/Slack, poprawiającego efektywność komunikacji i demonstrującego inicjatywę w automatyzacji powtarzalnych zadań.",
    "exp.desc2.3": "Projektowanie przyjaznych dla użytkownika przepływów UI i współpraca z interesariuszami w celu zapewnienia intuicyjnej interakcji i dobrego UX w aplikacjach PoC.",
    "exp.desc2.4": "Zdobycie praktycznego doświadczenia z integracją REST API, komunikacją frontend–backend, debugowaniem i architekturą aplikacji.",
    "exp.desc2.5": "Praca w małym zespole deweloperskim, nauka najlepszych praktyk czystego kodu, kontroli wersji i współpracy Agile.",
    "exp.desc2.6": "Szybka adaptacja do nowych technologii i wnoszenie pomysłów poza przydzielone zadania, pokazujące silną ciekawość i chęć nauki.",
    "exp.desc3.1": "Zdobycie praktycznego doświadczenia w rozwoju stron internetowych i administracji witrynami, praca z HTML, CSS i Drupal w celu tworzenia, aktualizowania i efektywnego utrzymywania treści witryny.",
    "exp.desc3.2": "Bliska współpraca z zespołem, rozwijanie umiejętności pracy zespołowej i komunikacji podczas udziału w dyskusjach projektowych i adaptacji do profesjonalnych przepływów pracy.",
    "exp.desc3.3": "Połączenie wiedzy technicznej z praktycznym zarządzaniem witryną, budując solidne fundamenty kariery w rozwoju stron internetowych i rozwiązaniach cyfrowych.",

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
    "contact.placeholder.email": "jan.kowalski@supercompany.com",
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
    "exp.senior": "Software Developer - Specialist",
    "exp.full": "Software Developer - Intern",
    "exp.frontend": "Frontend Developer",
    "exp.intern": "Intern",
    "exp.company1": "Calix Technology Poland",
    "exp.company2": "Delphi Technologies",
    "exp.company3": "Abventor",
    "exp.period1": "Jan 2019 - Aug 2025",
    "exp.period2": "Sep 2017 - Oct 2018",
    "exp.period3": "Aug 2017 - Sep 2017",
    "exp.desc1.1": "Delivered full-stack features across frontend and backend, focusing on clean, maintainable and scalable code that improved system stability and user experience.",
    "exp.desc1.2": "Designed and implemented performance optimizations, reducing load times and improving responsiveness across key modules.",
    "exp.desc1.3": "Built automated end-to-end tests (Puppeteer) and performance test suites (k6, JMeter), contributing to higher release confidence and fewer regressions.",
    "exp.desc1.4": "Actively collaborated with clients and cross-functional teams, translating business needs into technical solutions with empathy for user workflows and UX.",
    "exp.desc1.5": "Participated in Agile ceremonies (planning, daily stand-ups, retrospectives), supporting smooth communication and predictable delivery.",
    "exp.desc1.6": "Contributed to CI/CD pipelines and version control best practices, improving deployment speed and team productivity.",
    "exp.desc1.7": "Supported go-live phases for MES systems for international clients, resolving critical issues under time pressure and ensuring successful production rollout.",
    "exp.desc1.8": "Leveraged AI tools (GitHub Copilot, Cloud Code, ChatGPT) to explore new concepts, debug complex problems, and prototype frontend features — including full React pages.",
    "exp.desc1.9": "Mentored junior developers and improved onboarding process.",
    "exp.desc2.1": "Developed a proof-of-concept Angular web application for face-recognition-based login using Microsoft Cognitive Services, exploring early applications of AI in authentication flows.",
    "exp.desc2.2": "Built an internal chatbot for Skype/Slack, improving communication efficiency and demonstrating initiative in automating repetitive tasks.",
    "exp.desc2.3": "Designed user-friendly UI flows and collaborated with stakeholders to ensure intuitive interaction and good UX in PoC applications.",
    "exp.desc2.4": "Gained hands-on experience with REST API integration, frontend–backend communication, debugging, and application architecture.",
    "exp.desc2.5": "Worked in a small development team, learning best practices in clean code, version control, and Agile collaboration.",
    "exp.desc2.6": "Quickly adapted to new technologies and contributed ideas beyond assigned tasks, showing strong curiosity and willingness to learn.",
    "exp.desc3.1": "Gained hands-on experience in web development and website administration, working with HTML, CSS, and Drupal to create, update, and maintain website content effectively.",
    "exp.desc3.2": "Collaborated closely with the team, developing strong teamwork and communication skills while participating in project discussions and adapting to professional workflows.",
    "exp.desc3.3": "Combined technical knowledge with practical site management, building a solid foundation for career in web development and digital solutions.",

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
    "contact.placeholder.email": "john.smith@supercompany.com",
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
