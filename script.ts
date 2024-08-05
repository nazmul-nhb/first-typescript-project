// const divide = (a: number, b: number): number => {
//     return a / b;
// }

// console.log(divide(24, 6));

// array
// const fruits = ['apple', 'banana', 'orange', 5];
// fruits.push(35);

// const people: (number | string)[] = [];
// people.push(3);
// people.push('tititi');

// // primitive
// let a: string;
// let b: boolean;
// let c: number;

// let player: {
//     name: string,
//     age: number,
//     skills: Function,
//     active: boolean
// }

// player = {
//     name: "Abul",
//     age: 44,
//     skills: function () { console.log(this.age) },
//     active: true
// }

// player.skills();

type idType = string | number;
type userType = { name: string; age: number };

const userDetails = (id: idType, user: userType) => {
	console.log(`User ID is ${id}, Name is ${user.name}, age is ${user.age}`);
};

const sayHello = (user: userType) => {
	console.log(`Hello! ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};

userDetails(12, { name: "Enemy", age: 52 });
sayHello({ name: "Enemy", age: 52 });

// enums
const enum Size {
	Small = 12,
	Medium = 16,
	Large = 20,
}

const mySize: Size = Size.Medium;

console.log(mySize);

const calculateAge = (birthday: string): string => {
	const birthDate: Date = new Date(birthday);
	const today: Date = new Date();

	const year: number = today.getFullYear() - birthDate.getFullYear();
	if (year < 0) return "Birth Year Cannot be a Future Year!";

	const month: number = Math.abs(today.getMonth() - birthDate.getMonth());

	const day: number = Math.abs(today.getDate() - birthDate.getDate());

	const age: string = `${year} ${year > 1 ? "years" : "year"} ${month} ${
		month > 1 ? "months" : "month"
	} ${day} ${day > 1 ? "days" : "day"}`;

	return age;
};

console.log(calculateAge("2024-08-05"));
