class Employee {
    constructor(firstName, lastName, role, managerID) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.role = role;
      this.managerID = managerID;
    }
    getFirstName() {
      return this.firstName;
    }
    getLastName() {
      return this.lastName;
    }
    getRole() {
      return this.role;
    }
    getManagerID() {
      return this.managerID;
    }
  }
  
  module.exports = Employee;