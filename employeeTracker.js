const Employee = require("./js/employee.js");
const Department = require("./js/dept.js");
const Role = require("./js/role.js");
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "huhkohuhko",
  database: "employees_db",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected as ID" + connection.threadId + "\n");
  userPrompt();
});

function userPrompt(response) {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "View All Employees by Department",
          "View All Employees by Manager",
          "View All Employees by Role",
          "Add Employee",
          "Remove Employee",
          "Add Department",
          "Remove Department",
          "Add Role",
          "Remove Role",
          "View All Roles",
          "Update Employee Roles",
          "Update Employee Managers",
        ],
        name: "choice",
      },
    ])
    .then(function (reply) {
      if (reply.choice === "Add Employee") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is the employee's first name?",
              name: "firstName",
            },
            {
              type: "input",
              message: "What the employee's last name?",
              name: "lastName",
            },
            {
              type: "input",
              message: "What is the employee's role ID?",
              name: "role",
            },
            {
              type: "input",
              message: "What is the employee's manager's ID?",
              name: "managerId",
            },
          ])
          .then(function (addEmployeeReply) {
            var newEmployee = new Employee(
              addEmployeeReply.firstName,
              addEmployeeReply.lastName,
              addEmployeeReply.role,
              addEmployeeReply.managerId
            );
            console.log(newEmployee);
            // employeeId = employeeId++;
            addEmployee(newEmployee);
            // newTeamMember();
          });
      } else if (reply.choice === "Add Role") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is the title of the role?",
              name: "title",
            },
            {
              type: "input",
              message: "What is this role's salary?",
              name: "salary",
            },
            {
              type: "input",
              message: "What's the department ID of this role?",
              name: "departmentId",
            },
          ])
          .then(function (addRoleReply) {
            var newRole = new Role(
              addRoleReply.title,
              addRoleReply.salary,
              addRoleReply.departmentId
            );
            console.log(newRole);
            // employeeId = employeeId++;
            addRole(newRole);
          });
      } else if (reply.choice === "Add Department") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is the name of this new department?",
              name: "name",
            },
          ])
          .then(function (departmentReply) {
            var newDepartment = new Department(departmentReply.name);
            console.log(newDepartment);
            addDepartment(newDepartment);
          });
      } else if (reply.choice === "View All Employees") {
        viewEmployees();
      } else if (reply.choice === "View All Roles") {
        viewRoles();
      } else if (reply.choice === "Remove Employee") {
        deleteEmployee();
      } else if (reply.choice === "Remove Role") {
        deleteRole();
      } else if (reply.choice === "Remove Department") {
        deleteDepartment();
      } else if (reply.choice === "View All Employees by Department") {
        viewByDepartment();
      } else if (reply.choice === "View All Employees by Role") {
        viewByRole();
      } else if (reply.choice === "Update Employee Roles") {
        updateRole();
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}