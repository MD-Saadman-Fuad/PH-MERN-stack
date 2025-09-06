const students = {
    name: 'John',
    age: 25,
    subjects: ['Math', 'Science', 'History']
};
// dot notation 
console.log(students.age);
// bracket notation
name = students['name'];
console.log(name);

//chain notation
console.log(students.subjects[1]);

// optional chaining
console.log(students?.address?.city); // undefined