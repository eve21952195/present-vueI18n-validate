<script setup>
import { computed } from "vue";
import { useField } from "vee-validate";


const props = defineProps({
  placeholder: String,
  label: String,
  name: String,
  type: String,
});

// 利用 useField() 取欄位要用的值
// useField() 第一个参数(必填): input 'name'属性的值 。第二个参数: 验证规则。第三个参数: 设置初始值、label ...

const { value, errorMessage } = useField(props.name, undefined, {
    label: computed(()=> props.label)
})
</script>

<template>
    <label :for="name">{{ label }}</label>
    <input :name="name" :id="name" :type="type || 'text'"  v-model="value" :placeholder="placeholder || false"  class="form-control" :class="{'is-invalid': errorMessage}"/>
    <p class="invalid-feedback">{{ errorMessage }}</p>
  </template>

<style scoped>
.form-control {
  /* display: block; */
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-clip: padding-box;
  border: none;
  border-bottom: 1px solid #ced4da;
  outline: none;
}

input:focus{
    border-color: blue
}
.is-invalid {
  border-color: rgb(148, 26, 37);
}
.invalid-feedback {
  color: red;
}
</style>