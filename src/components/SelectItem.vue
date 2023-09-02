<script setup>
import { computed } from "vue";
import { useField } from "vee-validate";

const props = defineProps({
  label: String,
  name: String,
  typeKeyArr: Array,
  typeValueArr: Array,
});

// 利用 useField() 取欄位要用的值
// useField() 第一个参数(必填): input 'name'属性的值 。第二个参数: 验证规则。第三个参数: 设置初始值、label ...
const { value, errorMessage } = useField(props.name, undefined, {
  label: computed(() => props.label),
});
</script>

<template>
  <div class="form-control">
    <label :for="name">{{ label }}</label>
    <select :name="name" :id="name"  v-model="value">
      <option
        v-for="(type, index) in typeKeyArr"
        :key="type"
        :value="type"
      >
        {{ typeValueArr[index] }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.form-control {
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  border: none;
  border-bottom: 1px solid #ced4da;
}
label{
  padding-right: 10px;
  font-weight: bold;
}
select{
  width: 80%;
  border: none;
  outline: none;
}
</style>