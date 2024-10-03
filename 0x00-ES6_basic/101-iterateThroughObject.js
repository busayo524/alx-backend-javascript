export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  // Iterate through the iterator to get each employee name
  for (const employee of reportWithIterator) {
    employeeNames.push(employee);
  }

  // Join the names with ' | ' separator and return
  return employeeNames.join(' | ');
}
