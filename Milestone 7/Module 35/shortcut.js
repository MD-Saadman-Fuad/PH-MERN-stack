// false value 0, -0, "", null, undefined, NaN

// true value "0", " ", [], {}
const test = "0";
// if(test){
//     console.log("true");
// } else {
//     console.log("false");
// }
test ? console.log("true") : console.log("false");

const x = 5;
const y = 10;

x > y ? console.log("x is greater than y") : console.log("x is less than or equal to y");

const showUser = () => console.log("User Show");
const hideUser = () => console.log("User Hide");

// const isLoggedIn = true;
const isLoggedIn = false;
// isLoggedIn ? showUser() : hideUser();

isLoggedIn && showUser(); // if isLoggedIn is true, then showUser() will be called
!isLoggedIn && hideUser(); // if isLoggedIn is false, then hideUser() will be called

isLoggedIn || hideUser(); // if isLoggedIn is false, then hideUser() will be called
// if isLoggedIn is true, then showUser() will be called
isLoggedIn && showUser();