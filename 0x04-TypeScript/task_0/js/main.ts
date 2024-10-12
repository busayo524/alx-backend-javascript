Interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Ebuka',
  lastName: 'John',
  age: 23,
  location: 'Abuja',
}

const studetn2: Student = {
  firstName: 'Peter',
  lastName: 'Agbo',
  age: 32,
  location: 'Cameroon',
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tableBody = document.createElement('tbody');

studentList.forEach((student) =>{
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');
  
  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);

  tableBody.appendChild(row);
})

table.appendChild(tableBody);
document.body.appendChild(table);
