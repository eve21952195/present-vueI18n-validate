<script setup>
import { inject } from "vue";
import InputItem from "../InputItem.vue";
import SelectItem from "../SelectItem.vue";
import { useForm } from "vee-validate";

const t = inject("t");
// 前缀
const prefix = "tradingPage.withdraw";

// 集中宣告規則
const schema = {
  // withdrawalMethod: "required",
  amountLimit: "required", // 这限制是后端返回
  withdrawalAmount: "required|between:100,1000",
  withdrawalPassword: "required|min:6",
  confirmWithdrawalPassword: "required|confirmed:@withdrawalPassword",
};

const { values, handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    withdrawalMethod: "USDT",
    amountLimit: "100-1000",
    transactionFee: "0 元",
  },
});

// 提款方式key陣列
const withdrawalTypeKey = ["USDT", "bankCard"];


// input 要传入的props
// 把 t方法 放在外层做，单纯传字串
const inputBindProps = (fieldName, fieldType, fieldPlaceholder) => {
  return {
    name: fieldName,
    type: fieldType,
    label: t(`${prefix}.${fieldName}`),
    placeholder: t(`${prefix}.placeholder.${fieldPlaceholder}`),
  };
};

// select 要传入的props
const selectBindProps = (fieldName, selectType) => {
  let withdrawalTypeValue = withdrawalTypeKey.map((item) => {
    return t(`${prefix}.${selectType}.${item}`)
  })
  return {
    name: fieldName,
    label: t(`${prefix}.${fieldName}`),
    withdrawalTypeKey: withdrawalTypeKey,
    withdrawalTypeValue: withdrawalTypeValue
  };
};

// 提交
const onSubmit = handleSubmit((values) => {
  console.log(values);
  alert("验证通过时执行");
});
</script>

<template>
  <form @submit="onSubmit">
    <SelectItem v-bind="selectBindProps('withdrawalMethod', 'withdrawalType')"></SelectItem>
    <!-- <InputItem v-bind="inputBindProps('amountLimit', '', '')"></InputItem> -->
    <InputItem
      v-bind="
        inputBindProps(
          'withdrawalAmount',
          'number',
          'pleaseEnterTheWithdrawalAmount'
        )
      "
    ></InputItem>
    <!-- <InputItem v-bind="inputBindProps('transactionFee', '', '')"></InputItem> -->
    <InputItem
      v-bind="
        inputBindProps(
          'withdrawalPassword',
          'password',
          'pleaseEnterTheWithdrawalPassword'
        )
      "
    ></InputItem>
    <InputItem
      v-bind="
        inputBindProps(
          'confirmWithdrawalPassword',
          'password',
          'pleaseConfirmTheWithdrawalPassword'
        )
      "
    ></InputItem>
    <button>送出</button>
  </form>
  <h3>useForm-values: {{ values }}</h3>
</template>

