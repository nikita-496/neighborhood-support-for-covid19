import Vue from "vue";
import VueI18n from "vue-i18n";

import messages from "../locale/ru/messages";

Vue.use(VueI18n);

const locale = {
  ru: messages.ru,
};

const i18n = new VueI18n({
  locale: "ru",
  messages: locale,
});

export { i18n };
