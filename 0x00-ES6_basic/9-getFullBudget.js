export default function getFullBudget() {
  const budget = {
    income: 0,
    expenses: 0,
    getFullBudget() {
      return this.income - this.expenses;
    }
  };

  return budget;
}
