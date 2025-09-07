// JSON. Stringify() and JSON.parse()

// JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is commonly used for transmitting data between a server and a web application as text.

// JSON.stringify(): This method converts a JavaScript object or value to a JSON string. It is useful for sending data to a server or storing it in a file.

const student = {
    name: 'John Doe',
    age: 21,
    isEnrolled: true,
};

const jsonString = JSON.stringify(student);
console.log(jsonString);

// JSON.parse(): This method parses a JSON string and converts it into a JavaScript object. It is useful for receiving data from a server or reading it from a file.

const jsonString2 = '{"name":"Jane Doe","age":22,"isEnrolled":false}';
const studentObj = JSON.parse(jsonString2);
console.log(studentObj);

// Example of using both methods together
const originalStudent = {
    name: 'Alice',
    age: 23,
    isEnrolled: true,
};
const jsonString3 = JSON.stringify(originalStudent);
console.log(jsonString3);

const studentObj2 = JSON.parse(jsonString3);
console.log(studentObj2);

// Note: JSON only supports a limited set of data types: strings, numbers, booleans, arrays, objects, and null. Functions and undefined values are not supported in JSON.

// JSON is language-independent, meaning it can be used with many programming languages, not just JavaScript. Most modern programming languages have built-in support for parsing and generating JSON data.

// JSON is widely used in web development for APIs, configuration files, and data storage due to its simplicity and ease of use.

