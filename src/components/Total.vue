<script setup>
const props = defineProps({
  total: Number
})
</script>

<template>
  <li class="item-description flex between bold">
    <span>Total</span>
    <span>{{ props.total }}</span>
  </li>
</template>
