export default function taskBlock(trueOrFalse) {
  let task = false;  // Use let for block scoping
  let task2 = true;  // Use let for block scoping

  if (trueOrFalse) {
    const task = true;   // This creates a new inner block-scoped variable
    const task2 = false; // This also creates a new inner block-scoped variable
  }

  return [task, task2]; // Returns outer scope variables
}

