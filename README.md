# m12c-employee-tracker

A command-line application for managing a company's employee database, built using Node.js, Inquirer, and MySQL.

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Description

The Employee Tracker is a command-line application that allows a business owner to view and manage the departments, roles, and employees in their company. The application is built using Node.js, Inquirer for user input, and MySQL for database management.

## Installation

1. Clone this repository.
2. Navigate to the project directory and run `npm install` to install the required dependencies.
3. Set up your MySQL database using the provided `schema.sql` file.
4. (Optional) Seed your database with sample data using the provided `seeds.sql` file.
5. Update the `connection.mjs` file with your MySQL database credentials.

## Usage

To start the application, navigate to the project directory in the command line and run:


Follow the command-line prompts to view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.

## Walkthrough Video

A walkthrough video demonstrating the application's functionality can be found [here](INSERT_LINK_TO_VIDEO).

## License

This project is licensed under the MIT License.

## Contributing

To contribute to this project, please follow the standard [fork and pull request workflow](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks).

## Questions

For questions or additional information, please contact:

- [AGHenderson97](https://github.com/AGHenderson97)
- agh.pe.gatech@outlook.com


User Story:
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

Acceptance Criteria:
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
