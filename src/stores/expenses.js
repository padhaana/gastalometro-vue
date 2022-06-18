import { nanoid } from 'nanoid'
import { ref, computed } from 'vue'

// 1. States
const expensesList = ref([
  { id: nanoid(), description: 'Item 1', amount: 50 },
  { id: nanoid(), description: 'Item 2', amount: -20 },
  { id: nanoid(), description: 'Item 3', amount: 45 },
])
const showForm = ref(false)
const message = ref("ingresos")

// 2. Mutations
const expensesGroupList = computed(() => {
  switch(message.value) {
    case "todo":
      return expensesList.value.filter(expense => expense.amount < 0)
    case "ingresos":
      return expensesList.value
    case "gastos":
      return expensesList.value.filter(expense => expense.amount > 0)
  }
})

const expensesGroupListTotal = computed(
  () => expensesGroupList.value.reduce((sum, item) => (sum += item.amount), 0)
)

// 3. Actions
const addExpense = (description, amount) => {
  expensesList.value.push({ 
    id: nanoid(),
    description: description,
    amount: Number(amount)
  })
}
const changeMessage = () => {
  const lookupMessage = {
    "ingresos": "gastos",
    "gastos": "todo",
    "todo": "ingresos"
  }

  message.value = lookupMessage[message.value]
}

export {
  message,
  expensesGroupList,
  expensesGroupListTotal,
  showForm,
  addExpense,
  changeMessage
}