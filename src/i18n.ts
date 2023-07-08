import i18n from 'i18next'
import enJSON from './locale/en.json'
import heJSON from './locale/he.json'
import { initReactI18next } from 'react-i18next'
void i18n.use(initReactI18next).init({
  resources: { he: { ...heJSON }, en: { ...enJSON } }, // Where we're gonna put translations' files
  lng: 'he', // Set the initial language of the App
})
