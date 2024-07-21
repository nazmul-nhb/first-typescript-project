"use strict";
// const divide = (a: number, b: number): number => {
//     return a / b;
// }
const userDetails = (id, user) => {
    console.log(`User ID is ${id}, Name is ${user.name}, age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello! ${user.age > 50 ? 'Sir' : 'Mr.'} ${user.name}`);
};
userDetails(12, { name: 'Enemy', age: 52 });
sayHello({ name: 'Enemy', age: 52 });
