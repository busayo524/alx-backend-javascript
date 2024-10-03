import getFullBudget from './9-getFullBudget.js';

const fullBudget = getFullBudget(20, 50); // Pass the initial income and expenses

console.log(fullBudget.getIncomeInDollars()); // Output income in dollars
console.log(fullBudget.getIncomeInEuros()); // Output income in euros
