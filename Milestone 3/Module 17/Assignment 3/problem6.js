/** Problem 06 :  (Current Salary )  */ 
var experience = 30; 
var startingSalary = 45000; 
//write your code here 


var salary = startingSalary;

for (var year = 1; year <=experience; year++){
    salary = salary + (salary* 0.05)
}

console.log(salary.toFixed(2))