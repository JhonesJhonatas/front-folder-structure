import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from '@/modules/core/locales'

export default i18n
  .use(initReactI18next)
  .init({
    resources,
    ns: ['common', 'translation'],
    nsSeparator: '.',
    appendNamespaceToMissingKey: true,
    defaultNS: 'translation',
    lng: 'pt-BR',
    debug: true,
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false
    }
  });