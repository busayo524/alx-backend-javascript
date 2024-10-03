export default function taskBlock(trueOrFalse) {
  let task = false;  // Use let for block scoping
  let task2 = true;  // Use let for block scoping

  if (trueOrFalse) {
	  const task = true;
	  const task2 = false;
  }
return [task, task2]; // Returns outer scope variables
}
