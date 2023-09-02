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
  label: computed(() => props.label),
});
</script>

<template>
  <div class="form-control" :class="{ 'is-invalid': errorMessage }">
    <label :for="name">{{ label }}</label>
    <input
      :name="name"
      :id="name"
      :type="type || 'text'"
      v-model="value"
      :placeholder="placeholder || false"
    />
  </div>
  <p class="invalid-feedback">{{ errorMessage }}</p>
</template>

<style scoped>
.form-control {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  border: none;
  border-bottom: 1px solid #ced4da;
}

label {
  padding-right: 10px;
  font-weight: bold;
  white-space: nowrap;
  flex: 0;
}
input {
  border: none;
  outline: none;
  flex: 1 0 0;
}

.is-invalid {
  border-color: red;
}
.invalid-feedback {
  padding-left: 0.75rem;
  color: red;
}
</style>