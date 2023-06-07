import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const ns = ['translation', 'about', 'main', 'article'];
const supportedLngs = ['en', 'ru'];
const resources = ns.reduce((acc, n) => {
	supportedLngs.forEach((lng) => {
		if (!acc[lng]) acc[lng] = {};
		acc[lng] = {
			...acc[lng],
			[n]: require(`../../public/locales/${lng}/${n}.json`),
		};
	});
	return acc;
}, {});

i18n.use(initReactI18next)
	.use(LanguageDetector)
	.use(Backend)
	.init({
		// debug: true,
		lng: 'ru',
		fallbackLng: 'ru',
		ns,
		interpolation: {escapeValue: false},
		react: {useSuspense: false},
		supportedLngs,
		resources,
	});

export default i18n;
