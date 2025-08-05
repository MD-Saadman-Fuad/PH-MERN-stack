const people = [
  {
    name: "Alice",
    profession: "Software Engineer",
    age: 28
  },
  {
    name: "Bob",
    profession: "Graphic Designer",
    age: 32
  },
  {
    name: "Charlie",
    profession: "Teacher",
    age: 40
  },
  {
    name: "Diana",
    profession: "Doctor",
    age: 35
  },
  {
    name: "Ethan",
    profession: "Photographer",
    age: 26
  }
];

console.log(people);
console.log(people[0]);
console.log(people[0].profession);


for(const peep of people){
    console.log(peep);
}
for(const peep of people){
    console.log(peep.name, peep.age);
}