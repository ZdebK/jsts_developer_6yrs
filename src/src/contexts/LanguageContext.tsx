import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pl" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pl: {
    // Navigation
    "nav.about": "O mnie",
    "nav.experience": "Doświadczenie",
    "nav.education": "Edukacja",
    "nav.skills": "Umiejętności",
    "nav.projects": "Projekty",
    "nav.contact": "Kontakt",
    
    // Hero
    "hero.name": "Twoje Imię",
    "hero.title": "Full Stack Developer",
    "hero.location": "Warszawa, Polska",
    "hero.description": "Pasjonat programowania z doświadczeniem w tworzeniu nowoczesnych aplikacji webowych. Specjalizuję się w React, TypeScript i Node.js.",
    "hero.contact": "Kontakt",
    
    // Experience
    "exp.title": "Doświadczenie",
    "exp.senior": "Senior Full Stack Developer",
    "exp.full": "Full Stack Developer",
    "exp.frontend": "Frontend Developer",
    "exp.company1": "Tech Company Sp. z o.o.",
    "exp.company2": "Startup XYZ",
    "exp.company3": "Digital Agency",
    "exp.period1": "2022 - obecnie",
    "exp.period2": "2020 - 2022",
    "exp.period3": "2018 - 2020",
    "exp.desc1.1": "Projektowanie i implementacja skalowalnych aplikacji webowych",
    "exp.desc1.2": "Współpraca z zespołem w metodologii Agile/Scrum",
    "exp.desc1.3": "Mentoring juniorskich programistów",
    "exp.desc1.4": "Optymalizacja wydajności aplikacji",
    "exp.desc2.1": "Rozwój i utrzymanie aplikacji SaaS",
    "exp.desc2.2": "Implementacja RESTful API",
    "exp.desc2.3": "Integracja z zewnętrznymi serwisami",
    "exp.desc2.4": "Pisanie testów jednostkowych i E2E",
    "exp.desc3.1": "Tworzenie responsywnych stron internetowych",
    "exp.desc3.2": "Implementacja designów z Figma/Adobe XD",
    "exp.desc3.3": "Optymalizacja SEO i wydajności",
    
    // Education
    "edu.title": "Edukacja",
    "edu.master": "Magister Informatyki",
    "edu.bachelor": "Inżynier Informatyki",
    "edu.school": "Politechnika Warszawska",
    "edu.master.spec": "Specjalizacja: Inżynieria Oprogramowania",
    "edu.bachelor.spec": "Kierunek: Informatyka",
    "edu.period1": "2016 - 2018",
    "edu.period2": "2012 - 2016",
    "edu.certs": "Certyfikaty",
    
    // Skills
    "skills.title": "Umiejętności",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.devops": "DevOps & Tools",
    "skills.other": "Inne",
    
    // Projects
    "projects.title": "Projekty",
    "projects.ecommerce.title": "E-commerce Platform",
    "projects.ecommerce.desc": "Pełnofunkcjonalna platforma e-commerce z panelem administracyjnym, płatnościami online i zarządzaniem zamówieniami.",
    "projects.task.title": "Task Management App",
    "projects.task.desc": "Aplikacja do zarządzania projektami i zadaniami z funkcjami real-time collaboration i powiadomieniami.",
    "projects.social.title": "Social Media Dashboard",
    "projects.social.desc": "Dashboard analityczny dla mediów społecznościowych z wizualizacją danych i raportami.",
    "projects.weather.title": "Weather Forecast App",
    "projects.weather.desc": "Aplikacja pogodowa z dokładnymi prognozami, mapami interaktywnymi i powiadomieniami.",
    "projects.blog.title": "Blog CMS",
    "projects.blog.desc": "System zarządzania treścią z edytorem WYSIWYG, SEO optimization i multi-language support.",
    "projects.fitness.title": "Fitness Tracker",
    "projects.fitness.desc": "Aplikacja do śledzenia aktywności fizycznej, diet i postępów treningowych.",
    
    // Contact
    "contact.title": "Kontakt",
    "contact.subtitle": "Masz projekt lub propozycję współpracy? Skontaktuj się ze mną!",
    "contact.email": "Email",
    "contact.phone": "Telefon",
    "contact.location": "Lokalizacja",
    "contact.name": "Imię",
    "contact.message": "Wiadomość",
    "contact.send": "Wyślij wiadomość",
    "contact.placeholder.name": "Twoje imię",
    "contact.placeholder.email": "twoj.email@example.com",
    "contact.placeholder.message": "Twoja wiadomość...",
    
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
    // Navigation
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    
    // Hero
    "hero.name": "Your Name",
    "hero.title": "Full Stack Developer",
    "hero.location": "Warsaw, Poland",
    "hero.description": "Programming enthusiast with experience in creating modern web applications. I specialize in React, TypeScript, and Node.js.",
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
    "edu.master": "Master of Computer Science",
    "edu.bachelor": "Bachelor of Computer Science",
    "edu.school": "Warsaw University of Technology",
    "edu.master.spec": "Specialization: Software Engineering",
    "edu.bachelor.spec": "Major: Computer Science",
    "edu.period1": "2016 - 2018",
    "edu.period2": "2012 - 2016",
    "edu.certs": "Certifications",
    
    // Skills
    "skills.title": "Skills",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.devops": "DevOps & Tools",
    "skills.other": "Other",
    
    // Projects
    "projects.title": "Projects",
    "projects.ecommerce.title": "E-commerce Platform",
    "projects.ecommerce.desc": "Full-featured e-commerce platform with admin panel, online payments, and order management.",
    "projects.task.title": "Task Management App",
    "projects.task.desc": "Project and task management application with real-time collaboration and notifications.",
    "projects.social.title": "Social Media Dashboard",
    "projects.social.desc": "Analytics dashboard for social media with data visualization and reports.",
    "projects.weather.title": "Weather Forecast App",
    "projects.weather.desc": "Weather application with accurate forecasts, interactive maps, and notifications.",
    "projects.blog.title": "Blog CMS",
    "projects.blog.desc": "Content management system with WYSIWYG editor, SEO optimization, and multi-language support.",
    "projects.fitness.title": "Fitness Tracker",
    "projects.fitness.desc": "Application for tracking physical activity, diet, and training progress.",
    
    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Have a project or collaboration proposal? Get in touch!",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.name": "Name",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.placeholder.name": "Your name",
    "contact.placeholder.email": "your.email@example.com",
    "contact.placeholder.message": "Your message...",
    
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
    return translations[language][key as keyof typeof translations.pl] || key;
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
