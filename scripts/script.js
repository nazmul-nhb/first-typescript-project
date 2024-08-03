"use strict";
// const divide = (a: number, b: number): number => {
//     return a / b;
// }
const userDetails = (id, user) => {
    console.log(`User ID is ${id}, Name is ${user.name}, age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello! ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};
userDetails(12, { name: "Enemy", age: 52 });
sayHello({ name: "Enemy", age: 52 });
const mySize = 16 /* Size.Medium */;
console.log(mySize);
const calculateAge = (birthday) => {
    const birthDate = new Date(birthday);
    const today = new Date();
    const year = today.getFullYear() - birthDate.getFullYear();
    if (year < 0)
        return "Birth Year Cannot be a Future Year!";
    const month = today.getMonth() - birthDate.getMonth();
    const day = Math.abs(today.getDate() - birthDate.getDate());
    const age = `${year} ${year > 1 ? "years" : "year"} ${month} ${month > 1 ? "months" : "month"} ${day} ${day > 1 ? "days" : "day"}`;
    return age;
};
console.log(calculateAge("2092-01-18"));
