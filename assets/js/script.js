// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn')
  
// Collect employee data
const collectEmployees = function() {
//Get user input to create and return an array of employee objects
  const employees = [];
  let addingEmployees = true;
  while (addingEmployees) {
    let firstName = prompt("What's your first name:");
    let lastName = prompt("What's your last name:");
    let salary;
    do {
      salary = prompt("What's your yearly salary:");
      if (salary === null) {
        salary = 0;
        break;
      }
      salary = Number(salary);
    } while (isNaN(salary));
    employees.push({ firstName, lastName, salary });
    let addMore = prompt("Do you want to continue or cancel?");
    addingEmployees = addMore.toLowerCase() === 'continue';
    if (addingEmployees === false && !confirm("Are you sure you want to cancel?")) {
      addingEmployees = true;
    }
  }
  return employees;
};

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  //Calculate and display the average salary
  let totalSalary = employeesArray.reduce((accumulator, employee) => accumulator + employee.salary, 0);
  let averageSalary = totalSalary / employeesArray.length;
  console.log(`Average Salary: $${averageSalary.toFixed(2)} for ${employeesArray.length} employees`);
};

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  //Select and display a random employee
  let randomIndex = Math.floor(Math.random() * employeesArray.length);
  let randomEmployee = employeesArray[randomIndex];
  console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

