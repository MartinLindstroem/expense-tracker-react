interface Expense {
  category: string;
  amount: number;
}

const expenses: Expense[] = [
  {
    category: "Takeout",
    amount: 500,
  },
  {
    category: "Games",
    amount: 879,
  },
  {
    category: "Car",
    amount: 1000,
  },
  {
    category: "Clothes",
    amount: 699,
  },
  {
    category: "Groceries",
    amount: 3000,
  },
];

expenses.sort((a, b) => b.amount - a.amount);

export default expenses;
