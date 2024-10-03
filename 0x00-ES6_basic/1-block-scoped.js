// 1-block-scoped.js

export default function taskBlock(trueOrFalse) {
  let task = false;  // Outer block-scoped variable
  let task2 = true;  // Outer block-scoped variable

  if (trueOrFalse) {
    let task = true;   // Inner block-scoped variable
    let task2 = false; // Inner block-scoped variable
  }

  return [task, task2]; // Return outer block-scoped variables
}
