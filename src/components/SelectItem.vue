<script setup>
import { computed } from "vue";
import { useField } from "vee-validate";

const props = defineProps({
  label: String,
  name: String,
  withdrawalTypeKey: Array,
  withdrawalTypeValue: Array
});


// 利用 useField() 取欄位要用的值
// useField() 第一个参数(必填): input 'name'属性的值 。第二个参数: 验证规则。第三个参数: 设置初始值、label ...
const { value, errorMessage } = useField(props.name, undefined, {
  label: computed(() => props.label),
});
</script>

<template>
  <label :for="name">{{ label }}</label>
  <select :name="name" :id="name" class="form-control" v-model="value">
    <option v-for="(type, index) in withdrawalTypeKey" :key="type" :value="type">
      {{ withdrawalTypeValue[index] }}
    </option>
  </select>
</template>

<style scoped>
.form-control {
  display: block;
  width: 20%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  background-color: rgb(24, 26, 27);
  border-color: rgb(60, 65, 68);
}
.is-invalid {
  border-color: rgb(148, 26, 37);
}
.invalid-feedback {
  color: red;
}
</style>