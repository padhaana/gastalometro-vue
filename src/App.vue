<script setup>
import { expensesList, total } from '@stores/expenses';
import Expense from '@components/Expense.vue'
import Total from '@components/Total.vue'

</script>

<template>
  <div class="container flex between">
    <ul>
      <Expense 
        v-for="expense in expensesList"
        :key="expense.id"
        v-bind="expense"
      />
      <li class="item-description flex between">
        <input placeholder="Descripción" class="input medium" type="text">
        <input placeholder="Monto" class="input small" type="text">
      </li>
      <Total :total="total" />
    </ul>
    <button class="button clickable">Nueva Entrada</button>
  </div>
</template>
