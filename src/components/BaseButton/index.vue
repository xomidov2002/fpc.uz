<script setup lang="ts">
const props = defineProps({
  name: String,
  customClass: String
})
</script>
<template>
  <div>
    <button :class="customClass" class="form-submit-btn">{{ name }}</button>
  </div>
</template>
<style scoped>
.form-submit-btn {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  align-self: flex-start;
  font-family: inherit;
  color: white;
  font-weight: 600;
  width: 65%;
  background: #080D75;
  border: 1px solid #14151B;
  padding: 12px 16px;
  font-size: inherit;
  gap: 8px;
  margin-top: 8px;
  cursor: pointer;
  border-radius: 6px;
}
.form-submit-btn:hover {
  background-color: #0A0A0E;
  border-color: #080D75;
  color: white;
}
.form-submit-btn:hover{
  @apply shadow-xl
}
</style>