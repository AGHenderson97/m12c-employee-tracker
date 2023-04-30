// Import required packages and modules
import inquirer from 'inquirer';
import connection from './connection.mjs';
import {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} from './queries.mjs';

// Function to prompt the user for an action
async function mainMenu() {
  const { action } = await inquirer.prompt([
    {
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
    },
  ]);

  switch (action) {
    case 'View all departments':
      await viewAllDepartments(connection);
      break;
    case 'View all roles':
      await viewAllRoles(connection);
      break;
    case 'View all employees':
      await viewAllEmployees(connection);
      break;
    case 'Add a department':
      await addDepartment(connection);
      break;
    case 'Add a role':
      await addRole(connection);
      break;
    case 'Add an employee':
      await addEmployee(connection);
      break;
    case 'Update an employee role':
      await updateEmployeeRole(connection);
      break;
    case 'Exit':
      console.log('Goodbye!');
      process.exit(0);
      break;
    default:
      console.log('Invalid action');
      break;
  }

  // Return to the main menu
  mainMenu();
}

// Connect to the database and start the main menu
(async () => {
  try {
    await connection.connect();
    console.log('Connected to the database');
    mainMenu();
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  }
})();
