<script setup>
import { ref } from 'vue'
import { addExpense } from '@stores/expenses';

const emit = defineEmits([
  'hideForm'
])

const description = ref('')
const amount = ref(0)

const saveExpense = () => {
  addExpense(description.value, amount.value)
  emit('hideForm')
}
</script>

<template>
  <li class="item-description flex between">
    <input
      v-model="description"
      placeholder="Descripción" 
      class="input medium" 
      type="text"
    >
    <input 
      v-model="amount"
      placeholder="Monto" 
      class="input small" 
      type="text"
    >
    <button @click="saveExpense">Agregar</button>
  </li>
</template>