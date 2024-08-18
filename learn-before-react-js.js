// 1) Logical AND (&&) Operator

// If both values are true, the output will be true. If either value is false, the output will be false. With this operator, if the first value is false, the second value is not evaluated.

// let a = true;
// let b = false;
// console.log(a && b);
// +++++++++++++++++++++
// Output result is false 
// +++++++++++++++++++++

// let's we have to take another example of And Operator for understanding its behavior
// let a = false;

// function getName() {
//     return 'Bikesh Kumar Gupta';
// }

// // Since 'a' is false, the expression 'a && getName()' will evaluate to 'false' and 'getName()' will not be called.
// console.log(a && getName())


// 2) Logical OR (||) Operator
// If either value is true, the result will be true. The result will be false only if both values are false.

// let a = false;
// let b = true;
// console.log(a || b);
// +++++++++++++++++++++
// Output result is true 
// +++++++++++++++++++++


// 3) Template Literals

// let firstName = "Bikesh Kumar";
// let lastName = "Gupta";
// let prefix = "Mr";

// // Old method to use:
// console.log(prefix + " " + firstName + " " + lastName);
// // Output result: Mr Bikesh Kumar Gupta

// // New method using template literals:
// console.log(`${prefix} ${firstName} ${lastName}`);
// // Output result: Mr Bikesh Kumar Gupta


// 4) Ternary Operator

let returnAge =  true;

function getAgeInfo(age){
     return `The Person is ${age} years old`;
}

function getCity(){
     return 'This person is from Nepal';
}
// This is the traditional way to get the age of a person by using if else statements
// if(returnAge){
//    console.log(getAgeInfo(22));
// }else{
//      console.log(getCity());
// }

// Ternary  Operator is the professional way to call the age of a person by using if else statements

// condition ? statementForTrue : statementForFalse 
returnAge ? console.log(getAgeInfo(22)) : console.log(getCity()); 



// 5) Object and Array Destructuring And Shorthand Property Names

const id = 1;
const title = 'Product 1';
const rating = 5;

// Old way to create the object
// const product = {
//      id: id,
//      productName: title, // You can choose any key name you want
//      rating: rating
// }

// New way using shorthand property names
const product = {
    id,
    title,
    rating
}

console.log(product);


const productOne = {
    ProductName : 'Product One',
    ProductDescription : 'Product Description 1'
}

// Old way to create the objec and Destructuring objects
// let productName = productOne.productName;
// let ProductDescription = productOne.ProductDescription;

// Destructure properties into variables
const { ProductName, ProductDescription } = productOne;

console.log(ProductName, ProductDescription);


// Array Destructuring 
let arr = ['Suraj','Bikesh'];

// Old way to create the array 
// let arrFirstElement = arr[0];
// let arrSecondElement = arr[1];

// Destructuring array 
let[arrFirstElement, arrSecondElement] = arr;

console.log(arrFirstElement, arrSecondElement);


// 6) Default Parameters

// function sum(numOne, numTwo){
// return numOne + numTwo;
// }

// let result = sum(5,2);
// console.log(`The number of results is ${result}`);
// the number of results is 7 

// use default parameters in function 
function sum(numOne = 1, numTwo=7){
    return numOne + numTwo;
    }

// Call the function 'sum' with only one argument (5)
// This overrides the default value of numOne, but numTwo uses its default value (7)
    let result = sum(5);
    console.log(`The number of results is ${result}`);
    // The number of results is 12
 



// 7)Spread and Rest Operator

// This is the Spread Operator
const arrOne = [1,2,3,4,5]; 
const arrTwo = [6,7,8,9,10,11,12];
console.log([...arrOne, ...arrTwo]);
// And alse if we want to add new arrays to the spread operator then we can add it like this way  
console.log([...arrOne,100, ...arrTwo]);

// Rest Operator

// we will apply the rest operator also like this ...c, c will be made in array [3,4,5]
function someThing(a,b,...c){
 console.log(a,b,c);
 return 'Hello';
}

console.log(someThing(1,2,3,4,5));
// The output result is showing like this way  1 2 (3) [3, 4, 5]



// 8) Arrow Functions

// Arrow functions and ES6 Methods

// function normalFunction(){
//      // write the condition expression over the function
// }

// let bulb = true;

// const arrayFunction = () => {
//     if (bulb === true) {
//         console.log('bulb on');
//     } else {
//         console.log('bulb off');
//     }
// };

// // Call the function to see the result
// arrayFunction();



// 9) Array map() Method
// Sample array of persons with city and age properties
const personsArray = [
    { name: 'Mukesh', city: 'Kathmandu', age: 27 },
    { name: 'Dharmendra', city: 'Pokhara', age: 30 },
    { name: 'Bikesh', city: 'Kathmandu', age: 27 },
    { name: 'Happy', city: 'Kathmandu', age: 25 },
];
// Array Map() Method
// const extractPersonsArray = personsArray.map((person, index) =>{
//     // console.log(index, index);
//     return `${person.name} ${person.city} ${person.age}`;
// });
// console.log(extractPersonsArray);



// Use the filter method to get all persons from Kathmandu who are 27 years old
const extraAllPersonsFromKathmandu = personsArray.filter((person) => person.city === 'Kathmandu' && person.age === 27);

// Log the result to the console
console.log(extraAllPersonsFromKathmandu);

// Explanation:
// The `filter` method creates a new array with all elements that satisfy the provided testing function.
// In this case, it returns all persons from the `personsArray` whose `city` is 'Kathmandu' and `age` is 27.
// The resulting array will include all matching persons, not just the first match.

// Array some() Method
let checkSomeMethod = personsArray.some((person, index) => person.age === 20);
console.log(`${checkSomeMethod}`);
// the output result will be true because theh person age is 20 available there 

// Array every Method
let checkEveryMethod = personsArray.every((person, index) => person.age === 20);
console.log(`${checkEveryMethod} every person`);

// Array find() Method
const arrayThree = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use the find method to get the first occurrence of '1' in the array
let checkFindMethod = arrayThree.find((item) => item === 1);
console.log(checkFindMethod, 'Find method');

// Explanation:
// The `find` method returns the first element in the array that satisfies the provided testing function. In this case, it returns the first occurrence of `1`.
// If no element satisfies the testing function, `find` returns `undefined`.
//
// The `filter` method, on the other hand, returns an array containing all elements that satisfy the provided testing function. For example:
// let filteredArray = arrayThree.filter((item) => item === 1);
// This would return an array of all `1`s found in `arrayThree`, not just the first one.

