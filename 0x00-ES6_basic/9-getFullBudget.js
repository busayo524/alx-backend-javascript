export default function getFullBudget(income = 0, expenses = 0) {
  const budget = {
    income,
    expenses,
    getFullBudget() {
      return this.income - this.expenses;
    },
    getIncomeInDollars() {
      return this.income;
    },
    getIncomeInEuros() {
      return this.income * 0.85; // Example conversion rate
    }
  };

  return budget;
}
