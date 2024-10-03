export default function createIteratorObject(report) {
  // Create a generator function to yield employees
  function* employeeGenerator() {
    for (const deptEmployees of Object.values(report.allEmployees)) {
      for (const employee of deptEmployees) {
        yield employee;
      }
    }
  }

  // Return the generator
  return employeeGenerator();
}
