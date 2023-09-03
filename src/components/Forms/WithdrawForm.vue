<script setup>
import { inject } from "vue";
import InputItem from "../InputItem.vue";
import DisplayItem from "../DisplayItem.vue";
import SelectItem from "../SelectItem.vue";
import { useForm } from "vee-validate";

const t = inject("t");
const inputBindProps = inject("inputBindProps");
const selectBindProps = inject("selectBindProps");
const fieldContent = inject("fieldContent");

// 前缀
const prefix = "tradingPage.withdraw";
// 手续费
const transactionFee = 15;
// 提款方式key陣列
const withdrawalTypeKey = ["USDT", "bankCard"];


// 集中宣告規則
const schema = {
  amountLimit: "required", // 这限制是后端返回
  withdrawalAmount: "required|between:100,1000",
  withdrawalPassword: "required|min:6",
  confirmWithdrawalPassword: "required|confirmed:@withdrawalPassword",
};

const { values, handleSubmit, resetForm } = useForm({
  validationSchema: schema,
  // 設置預設值
  initialValues: {
    withdrawalMethod: 'USDT'
  }
});


// 提交
const onSubmit = handleSubmit((values) => {
  console.log(values);
  resetForm();
  alert("验证通过时执行");
});
</script>

<template>
  <form @submit="onSubmit">
    <SelectItem v-bind="selectBindProps('withdrawalMethod', 'withdrawalType', withdrawalTypeKey, prefix)"></SelectItem>
    <DisplayItem v-bind="fieldContent('amountLimit', '10-1000', prefix)"></DisplayItem>
    <InputItem
      v-bind="
        inputBindProps(
          'withdrawalAmount',
          'number',
          'pleaseEnterTheWithdrawalAmount',
          prefix
        )
      "
    ></InputItem>
    <DisplayItem v-bind="fieldContent('transactionFee', $n( transactionFee, 'currency'), prefix)"></DisplayItem>
    <InputItem
      v-bind="
        inputBindProps(
          'withdrawalPassword',
          'password',
          'pleaseEnterTheWithdrawalPassword',
          prefix
        )
      "
    ></InputItem>
    <InputItem
      v-bind="
        inputBindProps(
          'confirmWithdrawalPassword',
          'password',
          'pleaseConfirmTheWithdrawalPassword',
          prefix
        )
      "
    ></InputItem>
    <button class="sumitBtn">{{t(`common.button.submit`)}}</button>
  </form>
  <h3>useForm-values: {{ values }}</h3>
</template>

<style scoped lang="scss">
form{
  margin-bottom: 10px;
}
.sumitBtn {
  margin-top: 30px;
  color: #fff;
  background-color: #007bff;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  border: 1px solid transparent;
}
</style>

