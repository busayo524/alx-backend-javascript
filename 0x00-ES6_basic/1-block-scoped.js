export default function taskBlock(trueOrFalse) {
  const task = false; // Outer scope variable
  const task2 = true; // Outer scope variable

  // If trueOrFalse is true, redefine task and task2 within this block
  if (trueOrFalse) {
    const task = true;   // Inner scope variable
    const task2 = false; // Inner scope variable

    return [task, task2]; // Return inner scope variables
  }

  return [task, task2]; // Return outer scope variables if trueOrFalse is false
}
