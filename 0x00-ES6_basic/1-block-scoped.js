export default function taskBlock(trueOrFalse) {
  const task = false; // Outer scope variable
  const task2 = true; // Outer scope variable

  // If trueOrFalse is true, change return values accordingly
  if (trueOrFalse) {
    return [true, false]; // Return modified values directly
  }

  return [task, task2]; // Return outer scope variables if trueOrFalse is false
}
