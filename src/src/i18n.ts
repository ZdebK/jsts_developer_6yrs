import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

// Get base path dynamically
const basePath = '/jsts_developer_6yrs/';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: 'pl',
    fallbackLng: 'en',
    ns: ['common', 'hero', 'person', 'experience', 'education', 'skills', 'projects', 'blog', 'contact'],
    defaultNS: 'common',
    
    interpolation: {
      escapeValue: false,
    },
    
    backend: {
      loadPath: `${basePath}locales/{{lng}}/{{ns}}.json`,
    },
    
    react: {
      useSuspense: false,
    },
  });

export default i18n;
