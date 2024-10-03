export default function taskBlock(trueOrFalse) {
  const task = false; // outer scope variable
  const task2 = true; // outer scope variable

  // Check the input parameter
  if (trueOrFalse) {
    // If trueOrFalse is true, redefine task and task2 within this block
    let task = true;   // inner scope variable
    let task2 = false; // inner scope variable
    
    // Return the inner scope variables
    return [task, task2]; 
  }

  // If falseOrTrue is false, return the outer scope variables
  return [task, task2]; 
}
