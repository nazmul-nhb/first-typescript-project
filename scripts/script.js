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
    // Check if the birth date is in the future
    if (today < birthDate)
        return "Birth date cannot be in the future!";
    let year = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    let day = today.getDate() - birthDate.getDate();
    // Adjust for cases where the current month is earlier in the year than the birth month
    if (month < 0) {
        year--;
        month += 12;
    }
    // Adjust for cases where the current day is earlier in the month than the birth day
    if (day < 0) {
        month--;
        const previousMonth = today.getMonth() === 0 ? 11 : today.getMonth() - 1;
        const daysInPreviousMonth = new Date(today.getFullYear(), previousMonth + 1, 0).getDate();
        day += daysInPreviousMonth;
    }
    const age = `${year} ${year > 1 ? "years" : "year"} ${month} ${month > 1 ? "months" : "month"} ${day} ${day > 1 ? "days" : "day"}`;
    return age;
};
console.log(calculateAge("1995-05-03"));
