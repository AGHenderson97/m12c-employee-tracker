-- Insert sample data into the department table
INSERT INTO department (name)
VALUES ('Sales'),
       ('Engineering'),
       ('Finance'),
       ('Human Resources');

-- Insert sample data into the role table
INSERT INTO role (title, salary, department_id)
VALUES ('Sales Manager', 85000, 1),
       ('Sales Associate', 45000, 1),
       ('Software Engineer', 95000, 2),
       ('Quality Assurance Engineer', 75000, 2),
       ('Financial Analyst', 65000, 3),
       ('HR Manager', 70000, 4),
       ('HR Assistant', 35000, 4);

-- Insert sample data into the employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jane', 'Doe', 1, NULL),
       ('John', 'Smith', 2, 1),
       ('Alice', 'Johnson', 3, NULL),
       ('Bob', 'Williams', 4, 3),
       ('Carol', 'Brown', 5, NULL),
       ('David', 'Jones', 6, NULL),
       ('Eve', 'Garcia', 7, 6);
