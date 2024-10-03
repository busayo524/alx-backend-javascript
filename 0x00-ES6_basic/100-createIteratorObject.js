export default function createIteratorObject(report) {
  // Extract employees from all departments
  const employees = Object.values(report.allEmployees).flat();
  
  // Create a generator function to yield each employee
  return (function* () {
    for (const employee of employees) {
      yield employee;
    }
  })();
}
