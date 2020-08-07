USE employees_db;

INSERT INTO department (department_name)
VALUES ("Sales"),("Engineering"),("Finance"),("Legal");
INSERT INTO role (title, salary, department_id)
VALUES ("Consultant", 100000.00, 1),("Engineer", 150000.00, 2),("Accountant", 100000.00, 3),("Lawyer", 150000.00, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Ange","Hydrangea", 1, null),("Lana","Rose", 2, 1),("Ari","Daffodil", 3, 2),("Anna", "Carnation", 4, null);
SELECT first_name, last_name, title, salary, department_name
from employee
INNER JOIN role on employee.role_id = role.id
INNER JOIN department on role.department_id = department.id;

select * from department;
select * from role;
select * from employee;