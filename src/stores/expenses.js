import { nanoid } from 'nanoid'
import { ref, computed } from 'vue'

const expensesList = ref([
  { id: nanoid(), description: 'Item 1', amount: 50 },
  { id: nanoid(), description: 'Item 2', amount: -20 },
  { id: nanoid(), description: 'Item 3', amount: 45 },
])

const total = computed(
  () => expensesList.value.reduce((sum, item) => (sum += item.amount), 0)
)

export {
  expensesList,
  total
}