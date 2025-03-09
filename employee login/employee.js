const form = document.getElementById('employeeForm');
const employeeTable = document.getElementById('EmployeeTable');
const employeeData = document.getElementById('EmployeeData');

const employeenameError = document.getElementById('employeenameError');
const EmployeeidError = document.getElementById('EmployeeidError');
const ageError = document.getElementById('ageError');
const TeamnameError = document.getElementById('TeamnameError');
const DesignationError = document.getElementById('DesignationError');

let employees = [];
debugger
form.addEventListener('submit', (e) => {
  debugger
  e.preventDefault();
  const employeename = document.getElementById('employeename').value.trim();
  const Employeeid = document.getElementById('Employeeid').value.trim();
  const age = document.getElementById('age').value.trim();
  const Teamname = document.getElementById('Teamname').value.trim();
  const Designation = document.getElementById('Designation').value.trim();

  let error = false;

  employeenameError.textContent = '';
  EmployeeidError.textContent = '';
  ageError.textContent = '';
  TeamnameError.textContent = '';
  DesignationError.textContent = '';

  if (employeename === '') {
    employeenameError.textContent = 'Employee name is required';
    error = true;
  }

  if (Employeeid === '') {
    EmployeeidError.textContent = 'Employee ID is required';
    error = true;
  }

  if (age === '') {
    ageError.textContent = 'Age is required';
    error = true;
  }

  if (Teamname === '') {
    TeamnameError.textContent = 'Team name is required';
    error = true;
  }

  if (Designation === '') {
    DesignationError.textContent = 'Designation is required';
    error = true;
  }

  if (!error) {
   let employee = {
      employeename,
      Employeeid,
      age,
      Teamname,
      Designation
    };
    employees.push(employee);
    displayEmployees();
    alert('Employee added Successfully'); 
  }
});
 function displayEmployees() {
  employeeData.innerHTML='';
  for(let i=0;i<employees.length;i++)
  {
    const employee=employees[i];
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${employee.employeename}</td>
      <td>${employee.Employeeid}</td>
      <td>${employee.age}</td>
      <td>${employee.Teamname}</td>
      <td>${employee.Designation}</td>
    `;
    employeeData.appendChild(row);
    form.reset();
  } 
 };

