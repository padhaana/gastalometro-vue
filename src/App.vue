<script setup>
import { 
  expensesGroupList, 
  expensesGroupListTotal,
  showForm, 
  changeMessage, 
  message 
} from '@stores/expenses';
import Expense from '@components/Expense.vue'
import Total from '@components/Total.vue'
import ExpenseForm from '@components/ExpenseForm.vue'

/**
 * TODO: Cambiar montos en bolívares y dólares
 * TODO: Gráfica con fecha de ingresos y egresos
 */
</script>

<template>
  <div class="container flex between">
    <ul>
      <li class="item-description flex between">
        <button @click="emit('changeTotal')">Bolívares</button>
      </li>
      <Expense 
        v-for="expense in expensesGroupList"
        :key="expense.id"
        v-bind="expense"
      />
      <ExpenseForm @hideForm="showForm = false" v-if="showForm"/>
      <Total :total="expensesGroupListTotal" />
      <li class="item-description flex between">
        <button class="button clickable" @click="changeMessage">
          Mostrar {{message}}
        </button>
      </li>
    </ul>
    <button class="button clickable" @click="showForm = true">Nueva Entrada</button>
  </div>
</template>
