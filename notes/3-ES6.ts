// let & const
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

const maxLevel = 100;
console.log(maxLevel);
// maxLevel = 200; // Won't work

// Block scope
function reset() {
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

// Arrow functions
const addNumbers = function(number1: number, number2: number): number {
    return number1 + number2;
}
console.log(addNumbers(10, 3));

const multiplyNumbers = (number1: number, number2: number): number => number1 * number2;
console.log(multiplyNumbers(10, 3));

const greet = () => {
    console.log("Hello!");
}
greet();

const greetFriend = (friend: string) => console.log(friend);
greetFriend("Manu");

// Default Parameters
const countDown = (start: number = 10): void => {
    console.log(start);

    while(start > 0) {
        start--;
    }

    console.log("Done!", start);
}
countDown();

// Rest & Spread 
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers));

function makeArray(name: string, ...args: number[]) {
    console.log(name)
    return args;
}
console.log(makeArray("Max", 1, 2, 6));

// Tuples & Rest
function identity(...info: [string, number]) {
    return `My name is ${info[0]} and I'm ${info[1]} years old`;
}
console.log(identity("Max", 27));

// Destructuring
const myHobbies = ["Cooking", "Sports"];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const profile = {
    userName: "Max",
    age: 27
};
// const userName = profile.name;
// const userAge = profile.age;
const { userName: pName, age: pAge } = profile;
console.log(pName, pAge);

// Template Literals
const userName = "Max";
// const greeting = "Hello, I'm " + userName + ", I'm so cool!";
const greeting = `Hello, 
I'm ${userName}, 
I'm so cool!`;
console.log(greeting);