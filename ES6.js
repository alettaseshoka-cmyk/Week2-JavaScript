// Week 2 - ES6 Practice

// 1. let and const
let name = "Lerato";
const age = 20;
console.log(name, age);

// 2. Template Literals
console.log(`My name is ${name} and I am ${age} years old`);

// 3. Arrow Functions
const add = (a, b) => a + b;
console.log(add(2, 3));

// 4. Destructuring
const user = { username: "lerato", city: "Polokwane" };
const { username, city } = user;
console.log(username, city);

// 5. Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

// 6. Default Parameters
const greet = (person = "friend") => `Hello ${person}`;
console.log(greet());

// 7. Classes
class Student {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `Hi, I am ${this.name}`;
  }
}
const student1 = new Student("Lerato");
console.log(student1.sayHi());
