// import './assets/main.css'
import 'normalize.css/normalize.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

import { defineRule, configure } from 'vee-validate'

// 引入 VeeValidate 的驗證規則
import AllRules from "@vee-validate/rules"

// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n'

// 引入 vee-validate 語言包 (可以引入自己的來源，或是使用 @vee-validate/i18n 內部預設已經有的語言包。)
import zh from './language/zh.json'
import en from './language/en.json'
import ja from './language/ja.json'

// 利用 defineRule 方法註冊所有規則
Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule]);
  });

// 洗資料 因為 vee 只接受格式為 messages: {..}
function extractMessages(originData) {
    return JSON.parse(JSON.stringify(originData)).validation
}

// Vee-Validate 的全局配置
configure({
    generateMessage: localize({en: extractMessages(en), zh: extractMessages(zh), ja: extractMessages(ja)}),
    validateOnInput: true
})

// 設定預設語系
setLocale('zh')

createApp(App)
    .use(i18n)
    .use(router)
    .mount('#app')
