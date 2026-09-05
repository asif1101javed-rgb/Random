// ES6+
// Types of programming
// 1) Procedural prog

// keyword
// declarative keyword (var) 

// Reassignment
// Redeclaration
// scope
// var
// variable


// var
// var number = 2
// var number = 4

// 1) Reassignment (overwirte)
// can be reassignmed
// 2) can be red
// 3) function / global scope
// number = 5
// console.log(number);
// var num = 5
// function sum(){
    // var num = 5
//     console.log(num);
// }
// console.log(sum(5));
// console.log(num);


// {
    // statement
    // var
    // can be accessed 
// }
// can't be accessed

// -------------------------------------------
// let
// 1) can be reassigned
// 2) can't red
// let newValue = 9
// let newValue = 10

// const
// 1) can't be reassigned
// 2) can't be red
// const val = 56
// val = 66
// const val = 10


// 


// Declarative Keywords

// 1) Reassignment
// 2) Redeclared
// 3) Scope

// var -> reass / !red / Function/Global
// let -> reass / !red / Block
// const -> !reass / !red / Block


// Function
// Reusable block of code to executive the specific task with different value

// Parameters = variable
// Arguments = values

// Function def
// Function call

// Return always al last


// Types fo function
// 1) Named Function
// ES6+
// 2) Arrow Function

// ----------------------------------------------------------------------------------

// Hoisted
// sum(a,b)
// function sum(a,b){
//     console.log(a+b);
    
//     return a+b
// }
// sum(a,b)
// console.log(sum(1,2));


// Arrow Function
// const sum = (a,b) => {
//     console.log(a+b);
// }
// sum(1,4)

// const diff = (a,b) => a-b;
// const arrowfunc = (a,b) => {
//     return a-b
// }
// console.log(diff(5,3));


//-----------------------------------------------

// 3) Exrpession Function
// Hoisting
// Not Hoisted
// subtract(5,3)
// const subtract = function(a,b){
//     return a-b;
// }

// Expression Function is ES6+ or not?

// 4) Anonymous Function 
// Callback Function- Pass function in function as argument
// setTimeout(function(){
//     console.log("This runs adter 1 sec")
// }, 5000);


// 5) IIFE Function
// Immediately Invoked function Expression

(function(){
console.log("runs")
})()