// const balance = new Number(100)
// // console.log(balance);
// // console.log(balance.toFixed(2));//number ke aage point lg jata hai
// // console.log(balance.toString().length);//number to string 
// let otherNumber = 125.65
// // console.log(otherNumber.toPrecision(3));//this method use for approx value

// let hundreds = 100000
// // console.log(hundreds.toLocaleString('en-IN'));


// ****************************maths*********************
// Maths is an object
// methods on Math property+++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-5));//this property use for converting all the -ve value to +ve value 
// console.log(Math.round(11.6));//use for rounding number
// console.log(Math.ceil(5.44));//uper wali value lega
// console.log(Math.floor(5.44));//kam wali value lega
// console.log(Math.min(4,5,6,1));//to find min value 
// console.log(Math.max(55,46,4555,1));//to find max value
// console.log(Math.random());//*gives number btw 0-1*
const min = 50
const max = 100
console.log(Math.floor(Math.random() * (max - min + 1)) + min);