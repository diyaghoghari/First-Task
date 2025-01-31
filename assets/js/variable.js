// const { name } = require("browser-sync");

console.log("let,var,const");

// 1.

const name = "Diya";

console.log(name);

// name = "Dia";      throw error bcz can't change const value

// object 

const student = {
    name:"abc",
    std:9
};

console.log(student);

// student = {name:"bdc",std:8};

// console.log(student.name); // throw error

// but 

// student.name = "bcd"; 

// console.log(student);  then show output with change value 


let total = 98;

console.log(total);

// here used marks before intialized: (throw error:Cannot access 'marks' before initialization)

// console.log(marks);

// let marks = 56;

total = 81;

console.log(total);

// 3.

var fruits = ["apple","banana"];

console.log(fruits);

fruits = ["cherry"];

console.log(fruits);


// print before intialized give output undeifned (hoisting); 

console.log(ani);

var ani = ["cow","dog"];

// extra 
const a=15;

if (a==15){
    let a=10;
}
console.log(a);



