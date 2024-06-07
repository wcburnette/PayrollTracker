Employee Payroll Tracker

Overview
This employee payroll tracker allows users to add multiple employees and display their information on the page. It prompts users to input the first name, last name, and salary of each employee. After adding an employee, users can choose to continue adding more employees or cancel. If canceled, the employee data is displayed on the page sorted alphabetically by last name, and aggregated data is shown in the console.

User Story
As a payroll manager, I want an employee payroll tracker so that I can see my employees' payroll data and properly budget for the company.

Acceptance Criteria
GIVEN an employee payroll tracker.
WHEN I click the "Add employee" button.
THEN I am presented with a series of prompts asking for first name, last name, and salary.
WHEN I finish adding an employee.
THEN I am prompted to continue or cancel.
WHEN I choose to continue.
THEN I am prompted to add a new employee.
WHEN I choose to cancel.
THEN my employee data is displayed on the page sorted alphabetically by last name, and the console shows computed and aggregated data.

Functions
collectEmployees: Allows users to add multiple employees and returns an array of employee objects.
displayAverageSalary: Calculates and displays the average salary and number of employees.
getRandomEmployee: Selects and displays a random employee from the generated array.
displayEmployees: Renders employee data to an HTML table.
trackEmployeeData: Executes when the "Add Employees" button is clicked. It collects employee data, displays average salary, selects a random employee, sorts employees by last name, and displays them on the page.

