import inquirer from 'inquirer';
import mysql from 'mysql2';
import { viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole } from './queries.mjs';

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'm9c_user',
  password: 'm9c_password',
  database: 'your_database_name',
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
  runApp();
});

// Function to prompt the user to choose an action
function runApp() {
  inquirer
    .prompt({
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'View all departments':
          viewAllDepartments(connection, runApp);
          break;
        case 'View all roles':
          viewAllRoles(connection, runApp);
          break;
        case 'View all employees':
          viewAllEmployees(connection, runApp);
          break;
        case 'Add a department':
          addDepartment(connection, runApp);
          break;
        case 'Add a role':
          addRole(connection, runApp);
          break;
        case 'Add an employee':
          addEmployee(connection, runApp);
          break;
        case 'Update an employee role':
          updateEmployeeRole(connection, runApp);
          break;
        case 'Exit':
          console.log('Goodbye!');
          connection.end();
          break;
      }
    });
}
