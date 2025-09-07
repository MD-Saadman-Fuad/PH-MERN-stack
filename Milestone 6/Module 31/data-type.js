let data = 4;

console.log(typeof data); // "number"

data = "Hello World";
console.log(typeof data); // "string"

data = true;
console.log(typeof data); // "boolean"

data = {name: "John", age: 30};
console.log(typeof data); // "object"

data = [1, 2, 3, 4, 5];
console.log(typeof data);

console.log(Array.isArray(data)); // true

data = null;
console.log(typeof data); // "object"

data = undefined;
console.log(typeof data); // "undefined"

data = function() { return "Hello"; };
console.log(typeof data); // "function"

//primitive data types: number, string, boolean, null, undefined, symbol

//non-primitive data types: object, array, function