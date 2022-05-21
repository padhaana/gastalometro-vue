import { ref, computed } from 'vue'

const expensesList = ref([
  { id: 1, description: 'Item 1', amount: 50 },
  { id: 2, description: 'Item 2', amount: -20 },
  { id: 3, description: 'Item 3', amount: 45 },
])

const total = computed(
  () => expensesList.value.reduce((sum, item) => (sum += item.amount), 0)
)

export {
  expensesList,
  total
}