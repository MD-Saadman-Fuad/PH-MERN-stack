const student = {
  name: "Rahim",
  id: 101,
  address: "Dhaka, Bangladesh",
  isSingle: true,
  friends: ["Karim", "Salam", "Babul"],
  act: function () {
    console.log("Hero")
  },
  car: {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "White"
  }
};

console.log(student);
console.log(student.friends);
console.log(student.car);
console.log(student.car.brand);
console.log(student.act());
