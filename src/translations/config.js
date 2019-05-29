import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '@/store/index'
import messages from './translations'
Vue.use(VueI18n)

// translations
const i18n = new VueI18n({
    locale: store.getters.locale,
    fallbackLocale: 'en',
    silentTranslationWarn: true,
    messages
});

export default i18n;
