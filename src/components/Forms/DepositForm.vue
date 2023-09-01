<script setup>
import { inject, ref } from "vue";
import InputItem from "../InputItem.vue";
import { useForm } from "vee-validate";

const t = inject("t");


// 集中宣告規則
const schema = {
  depositAmount: "required",
  remittanceName: "required|min:8",
};

// 
const { values, handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    // OperatingDescription: t("tradingPage.deposit.OperatingDescriptionContent"),
  },
});


// 最大最小值 (应该是要从后端接来)
const min = ref(50);
const max = ref(150);
// 前缀
const prefix = 'tradingPage.deposit'

// input 要传入的props
// 把 t方法 放在外层做，单纯传字串
const inputBindProps = (
  fieldName,
  fieldType,
  fieldPlaceholder,
) => {
  return {
    name: fieldName,
    type: fieldType,
    label: t(`${prefix}.${fieldName}`),
    placeholder: t(`${prefix}.placeholder.${fieldPlaceholder}`),
  };
};

// 提交
const onSubmit = handleSubmit((values) => {
  console.log(values);
  alert("验证通过时执行");
});


</script>

<template>
  <p>
    {{ t(`${prefix}.tips`) }} :
    {{
      t(`${prefix}.content.tipsContent`, {
        min: $n(min, "currency"),
        max: $n(max, "currency"),
      })
    }}
  </p>
  <form @submit="onSubmit">    
    <InputItem v-bind="inputBindProps('depositAmount', 'number', 'pleaseEnterTheDepositAmount')"></InputItem>
    <InputItem v-bind="inputBindProps('remittanceName', '', 'pleaseEnterTheSenderName')"></InputItem>
    <InputItem v-bind="inputBindProps('transferRemark', '', 'pleaseEnterTheTransferRemarks')"></InputItem>
    <button>送出</button>
  </form>
  <h3>useForm-values: {{ values }}</h3>
</template>