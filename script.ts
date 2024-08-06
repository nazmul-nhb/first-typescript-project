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

	// Check if the birth date is in the future
	if (today < birthDate) return "Birth date cannot be in the future!";

	let year: number = today.getFullYear() - birthDate.getFullYear();
	let month: number = today.getMonth() - birthDate.getMonth();
	let day: number = today.getDate() - birthDate.getDate();

	// Adjust for cases where the current month is earlier in the year than the birth month
	if (month < 0) {
		year--;
		month += 12;
	}

	// Adjust for cases where the current day is earlier in the month than the birth day
	if (day < 0) {
		month--;
		const previousMonth =
			today.getMonth() === 0 ? 11 : today.getMonth() - 1;
		const daysInPreviousMonth = new Date(
			today.getFullYear(),
			previousMonth + 1,
			0
		).getDate();
		day += daysInPreviousMonth;
	}

	const age: string = `${year} ${year > 1 ? "years" : "year"} ${month} ${
		month > 1 ? "months" : "month"
	} ${day} ${day > 1 ? "days" : "day"}`;

	return age;
};

console.log(calculateAge("1995-05-03"));

