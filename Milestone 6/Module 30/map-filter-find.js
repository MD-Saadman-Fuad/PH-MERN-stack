 const students = [
    { name: 'John', age: 25, city: 'New York' },
    { name: 'Jane', age: 30, city: 'San Francisco' },
    { name: 'Mike', age: 22, city: 'Chicago' },
    { name: 'Emily', age: 28, city: 'Los Angeles' }
];

const names = students.map(student => student.name);
console.log(names); // ['John', 'Jane', 'Mike', 'Emily']
const ages = students.filter(student => student.age > 18);
console.log(ages); // [25, 30, 22, 28]

const mike = students.find(student => student.name === 'Mike');
console.log(mike); // { name: 'Mike', age: 22, city: 'Chicago' }