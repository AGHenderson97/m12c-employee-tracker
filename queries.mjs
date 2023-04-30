// Import required packages
import inquirer from 'inquirer';
import cTable from 'console.table';

// Helper function to prompt the user for department name
async function promptForDepartmentName() {
  const { name } = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the department name:',
    },
  ]);
  return name;
}

// Helper function to prompt the user for role details
async function promptForRoleDetails(connection) {
  const departments = await connection.query('SELECT * FROM department');
  const { title, salary, department_id } = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the role title:',
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter the role salary:',
    },
    {
      type: 'list',
      name: 'department_id',
      message: 'Select the department:',
      choices: departments[0].map((dept) => ({
        name: dept.name,
        value: dept.id,
      })),
    },
  ]);
  return { title, salary, department_id };
}

// Helper function to prompt the user for employee details
async function promptForEmployeeDetails(connection) {
  const roles = await connection.query('SELECT * FROM role');
  const employees = await connection.query('SELECT * FROM employee');
  const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'Enter the employee\'s first name:',
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'Enter the employee\'s last name:',
    },
    {
      type: 'list',
      name: 'role_id',
      message: 'Select the employee\'s role:',
      choices: roles[0].map((role) => ({
        name: role.title,
        value: role.id,
      })),
    },
    {
      type: 'list',
      name: 'manager_id',
      message: 'Select the employee\'s manager:',
      choices: [
        { name: 'None', value: null },
        ...employees[0].map((employee) => ({
          name: `${employee.first_name} ${employee.last_name}`,
          value: employee.id,
        })),
      ],
    },
  ]);
  return { first_name, last_name, role_id, manager_id };
}

// Function to view all departments
export async function viewAllDepartments(connection) {
  const [departments] = await connection.query('SELECT * FROM department');
  console.table(departments);
}

// Function to view all roles
export async function viewAllRoles(connection) {
  const [roles] = await connection.query(`SELECT role.id, role.title, role.salary, department.name as department
                                          FROM role
                                          JOIN department ON role.department_id = department.id`);
  console.table(roles);
}

// Function to view all employees
export async function viewAllEmployees(connection) {
  const [employees] = await connection.query(`SELECT e.id, e.first_name, e.last_name, role.title, department.name as department, role.salary, CONCAT(m.first_name, ' ', m.last_name) as manager
                                              FROM employee e
                                              LEFT JOIN role ON e.role_id = role.id
                                              LEFT JOIN department ON role.department_id = department.id
                                              LEFT JOIN employee m ON e.manager_id = m.id`);
  console.table(employees);
}

// Function to add a department
export async function addDepartment(connection) {
    const name = await promptForDepartmentName();
    await connection.query('INSERT INTO department (name) VALUES (?)', [name]);
    console.log(`Added department: ${name}`);
  }
  
  // Function to add a role
  export async function addRole(connection) {
    const { title, salary, department_id } = await promptForRoleDetails(connection);
    await connection.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, department_id]);
    console.log(`Added role: ${title}`);
  }
  
  // Function to add an employee
  export async function addEmployee(connection) {
    const { first_name, last_name, role_id, manager_id } = await promptForEmployeeDetails(connection);
    await connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [first_name, last_name, role_id, manager_id]);
    console.log(`Added employee: ${first_name} ${last_name}`);
  }
  
  // Function to update an employee's role
  export async function updateEmployeeRole(connection) {
    const employees = await connection.query('SELECT * FROM employee');
    const roles = await connection.query('SELECT * FROM role');
    const { employee_id, role_id } = await inquirer.prompt([
      {
        type: 'list',
        name: 'employee_id',
        message: 'Select the employee to update:',
        choices: employees[0].map((employee) => ({
          name: `${employee.first_name} ${employee.last_name}`,
          value: employee.id,
        })),
      },
      {
        type: 'list',
        name: 'role_id',
        message: 'Select the new role for the employee:',
        choices: roles[0].map((role) => ({
          name: role.title,
          value: role.id,
        })),
      },
    ]);
  
    await connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [role_id, employee_id]);
    console.log(`Updated employee's role`);
  }
  
