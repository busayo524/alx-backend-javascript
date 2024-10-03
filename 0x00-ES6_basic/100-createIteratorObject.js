export default function createIteratorObject(report) {
  // Extract employees from all departments and flatten manually
  const employees = [];
  
  // Collect all employees from each department
  for (const deptEmployees of Object.values(report.allEmployees)) {
    for (const employee of deptEmployees) {
      employees.push(employee);
    }
  }

  // Create a generator function to yield each employee
  return (function* () {
    for (const employee of employees) {
      yield employee;
    }
  })();
}
