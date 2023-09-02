<script setup>
import { inject, ref } from "vue";
import InputItem from "../InputItem.vue";
import DisplayItem from "../DisplayItem.vue";
import { useForm } from "vee-validate";


const t = inject("t");
const inputBindProps = inject("inputBindProps");
const fieldContent = inject("fieldContent")

// 集中宣告規則
const schema = {
  depositAmount: "required|min_value:50",
  remittanceName: "required|min:8",
};

//
const { values, handleSubmit, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
  },
});

// 最大最小值 (应该是要从后端接来)
const min = ref(50);
const max = ref(150);
// 前缀
const prefix = "tradingPage.deposit";


// 提交
const onSubmit = handleSubmit((values) => {
  console.log(values);
  alert("验证通过时执行");
  resetForm();
});
</script>

<template>
  <form @submit="onSubmit">
    <DisplayItem v-bind="fieldContent('recipientName', '王小明', prefix)"></DisplayItem>
    <DisplayItem
      v-bind="fieldContent('recipientAccount', '123456789', prefix)"
    ></DisplayItem>
    <InputItem
      v-bind="
        inputBindProps('depositAmount', 'number', 'pleaseEnterTheDepositAmount', prefix)
      "
    ></InputItem>
    <InputItem
      v-bind="inputBindProps('remittanceName', '', 'pleaseEnterTheSenderName', prefix)"
    ></InputItem>
    <InputItem
      v-bind="
        inputBindProps('transferRemark', '', 'pleaseEnterTheTransferRemarks', prefix)
      "
    ></InputItem>
    <button class="sumitBtn">送出</button>
  </form>
  <div class="small">
    <p>{{ t(`${prefix}.label.tips`) }} :</p>
    <p>
      {{
        t(`${prefix}.content.tipsContent`, {
          min: $n(min, "currency"),
          max: $n(max, "currency"),
        })
      }}
    </p>
  </div>

  <h3>useForm-values: {{ values }}</h3>
</template>

<style scoped lang="scss">
form{
  margin-bottom: 10px;
}
.small {
  font-size: 16px;
  color: red;
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