export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    // eslint-disable-next-line
    var innerTask = true;
    // eslint-disable-next-line
    var innerTask2 = false;
  }

  return [task, task2];
}
