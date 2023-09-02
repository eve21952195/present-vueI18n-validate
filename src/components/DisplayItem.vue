<script setup>
const props = defineProps({
  label: String,
  content: String,
});
</script>

<template>
  <div class="form-control">
    <label>{{ label }}</label>
    <div class="content">{{ content }}</div>
  </div>
</template>

<style scoped lang="scss">
.form-control {
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  border: none;
  border-bottom: 1px solid #ced4da;
  display: flex;
  align-items: center;
  label {
    padding-right: 10px;
    font-weight: bold;
    white-space: nowrap;
    flex: 0;
  }
  .content {
    flex: 1 0 0;
  }
}
</style>
