import { createI18n } from "vue-i18n";


// 引入语言包
import zh from "./language/zh.json"
import en from "./language/en.json"
import ja from "./language/ja.json"

const i18n = createI18n({
    legacy: false,
    locale: "zh",
    fallbackLocale: "zh",
    messages: {
        zh,
        en,
        ja
    },
    // 语系货币格式
    numberFormats: {
        en: {
            currency: {
                style: 'currency',
                currency: 'USD',
                currencyDisplay: 'symbol',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
                useGrouping: true
            }
        },
        ja: {
            currency: {
                style: 'currency', currency: 'JPY', useGrouping: true, currencyDisplay: 'symbol'
            }
        },
        zh: {
            currency: {
                style: 'currency', currency: 'TWD', useGrouping: true, currencyDisplay: 'symbol'
            }
        }
    }
})

export default i18n