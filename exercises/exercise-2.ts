// Exercise 1 - Maybe use an Arrow Function?
const double = (value: number): number => value * 2;
console.log(double(10));
 
// Exercise 2 - If only we could provide some default values...
const hello = (name: string = "Max") => {
    console.log("Hello, " + name);
};
hello();
hello("Anna");
 
// Exercise 3 - Isn't there a shorter way to get all these Values?
let numbersList: number[] = [-3, 33, 38, 5];
console.log(Math.min(...numbersList));
 
// Exercise 4 - I have to think about Exercise 3 ...
let newArray: number[] = [55, 20];
newArray.push(...numbersList);
console.log(newArray);
 
// Exercise 5 - That's a well-constructed array.
const testResults: number[] = [3.89, 2.99, 1.38];
// var result1 = testResults[0];
// var result2 = testResults[1];
// var result3 = testResults[2];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);
 
// Exercise 6 - And a well-constructed object!
const scientist: { firstName: string, experience: number } = {firstName: "Will", experience: 12};
// var firstName = scientist.firstName;
// var experience = scientist.experience;
const { firstName, experience } = scientist;
console.log(firstName, experience); 