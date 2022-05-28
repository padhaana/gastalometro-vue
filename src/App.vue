<script setup>
import { ref, computed } from 'vue'
import { expensesList, total } from '@stores/expenses';
import Expense from '@components/Expense.vue'
import Total from '@components/Total.vue'
import { nanoid } from 'nanoid'

let showForm = ref(false)
let description = ref('')
let amount = ref(0)

const addExpense = () => {
  expensesList.value.push({ 
    id: nanoid(),
    description: description.value,
    amount: Number(amount.value)
   })
   showForm.value = false
   description.value = ''
   amount.value = 0
}

const incomeList = computed(() => {
  return expensesList.value.filter(expense => expense.amount > 0)
})
const outcomeList = computed(() => {
  return expensesList.value.filter(expense => expense.amount < 0)
})

// Cambiar cuerpo de la función para no cambiar expensesList
const onlyIncome = () => {
  expensesList.value = incomeList.value
}

// Cambiar cuerpo de la función para no cambiar expensesList
const onlyOutcome = () => {
  expensesList.value = outcomeList.value
}

defineEmits([
  'changeTotal'
])
</script>

<template>
  <div class="container flex between">
    <ul>
      <li class="item-description flex between">
        <button @click="emit('changeTotal')">Bolívares</button>
      </li>
      <Expense 
        v-for="expense in expensesList"
        :key="expense.id"
        v-bind="expense"
      />
      <li class="item-description flex between" v-if="showForm">
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
        <button @click="addExpense">Agregar</button>
      </li>
      <Total :total="total" />
      <li class="item-description flex between">
        <button class="button clickable" @click="onlyIncome">Solo Ingresos</button>
        <button class="button clickable" @click="onlyOutcome">Solo Gastos</button>
      </li>
    </ul>
    <button class="button clickable" @click="showForm = true">Nueva Entrada</button>
  </div>
</template>
