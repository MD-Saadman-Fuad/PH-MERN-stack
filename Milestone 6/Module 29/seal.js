const employee = {
    name: "John Doe",
    age: 30,
    position: "Software Engineer",
    department: "Development",
    salary: 60000,
};

Object.seal(employee); // Prevents adding or removing properties, but allows modification of existing properties

console.log(employee);


delete employee.age;
console.log(employee);

delete employee.position;
console.log(employee);


employee.salary = 70000;
console.log(employee);

employee.location = "New York";
console.log(employee);