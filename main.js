// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
	valid1,
	valid2,
	valid3,
	valid4,
	valid5,
	invalid1,
	invalid2,
	invalid3,
	invalid4,
	invalid5,
	mystery1,
	mystery2,
	mystery3,
	mystery4,
	mystery5,
];

// Add your functions below:

// * Return true when an array contains digits of a valid cred card number, and returns false when its invalid.
function validateCred(array) {
	//  Luhn Algorithm:
	// ? 1. Starting from the farthest digit to the right, iterate to the left.
	let newArr = [];
	for (let i = array.length - 1; i >= 0; i -= 1) {
		newArr.push(array[i] * 2);
	}

	// ? 2. As you iterate to the left, every other digit is doubled, if the number is greater than 9 after doubling, subtract 9 from its value.

	for (let i = 0; i < newArr.length; i++) {
		if (newArr[i] > 9) {
			newArr[i] -= 9;
		}
	}

	// ? 3. Sum up all the digits in the credit card number.

	let sum = newArr.reduce(function (a, b) {
		return a + b;
	}, 0);

	// ? 4. If the sum modulo 10 is 0, then the number is valid, otherwise, its valid.

	if (sum % 10 === 0) {
		return "valid";
	} else {
		return "invalid";
	}
}

// console.log(validateCred(valid1));

// * Function to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.

function findInvalidCards(nestedArray) {
	let invalid = [];
	for (let i = 0; i < batch.length; i++) {
		let sumInvalid = validateCred(batch[i]);
		invalid.push(sumInvalid);
		arr = invalid.filter((e) => e !== "valid");
	}

	return arr;
}

// console.log(findInvalidCards());

function idInvalidCardCompanies(nested) {
	let companies = [];
	for (let i = 0; i < batch.length; i++) {
		nested = batch[i][0];
		if (nested === 3) {
			companies.push("Amex");
		} else if (nested === 4) {
			companies.push("Visa");
		} else if (nested === 5) {
			companies.push("Mastercard");
		} else if (nested === 6) {
			companies.push("Discover");
		} else {
			return "Company not found.";
		}
	}
	let index = [...new Set(companies)];
	return index;
}

console.log(idInvalidCardCompanies());
