const numbers = [1, 2, 3, 4, 5];
for(const number of numbers){
    console.log(number);
}

const employee = {
    name: "John Doe",
    age: 30,
    position: "Software Engineer",
    department: "Development",
    salary: 60000,
};

for(const key in employee){
    value = employee[key];
    console.log(`${key}: ${value}`);
}


const keys = Object.keys(employee);
console.log(keys);
for(const key of keys){
    const value = employee[key];
    console.log(`${key}: ${value}`);
}