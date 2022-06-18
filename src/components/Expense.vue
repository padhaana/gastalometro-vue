<script setup>
const props = defineProps({
  description: String,
  amount: Number,
  unit: String
})
</script>

<template>
  <li
    :class="[
      'item-description', 
      'flex', 
      'between', 
      { 
        'income': props.amount > 0, 
        'outcome': props.amount < 0 
      }
    ]"
  >
    <span>{{ props.description }}</span>
    <span>{{ props.amount }} {{ props.unit }}</span>
  </li>
</template>