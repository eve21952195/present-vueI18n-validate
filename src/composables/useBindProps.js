import { useI18n } from 'vue-i18n'

export function useBindProps() {
    const { t } = useI18n()
    // input 要传入的props
    const inputBindProps = (fieldName, fieldType, fieldPlaceholder, prefix) => {
        return {
            name: fieldName,
            type: fieldType,
            label: t(`${prefix}.label.${fieldName}`),
            placeholder: t(`${prefix}.placeholder.${fieldPlaceholder}`),
        };
    };

    // select 要传入的props
    const selectBindProps = (fieldName, selectType, typeKeyArr, prefix) => {
        let typeValueArr = typeKeyArr.map((item) => {
            return t(`${prefix}.${selectType}.${item}`)
        })
        return {
            name: fieldName,
            label: t(`${prefix}.label.${fieldName}`),
            typeKeyArr: typeKeyArr,
            typeValueArr: typeValueArr
        };
    };

    // 仅显示 要传入的props
    const fieldContent = (fieldName, fieldContent, prefix) => {
        return {
            label: t(`${prefix}.label.${fieldName}`),
            content: fieldContent,
        };
    };

    return {
        inputBindProps,
        selectBindProps,
        fieldContent
    }

}