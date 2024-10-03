export default function taskBlock(trueOrFalse) {
  const task = false; // Outer scope variable
  const task2 = true; // Outer scope variable

  // If trueOrFalse is true, define inner variables
  if (trueOrFalse) {
    const innerTask = true;   // Inner scope variable
    const innerTask2 = false;  // Inner scope variable
    return [innerTask, innerTask2]; // Return inner scope variables
  }

  return [task, task2]; // Return outer scope variables if trueOrFalse is false
}
