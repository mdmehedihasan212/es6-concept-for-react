// single line arrow function
const oddNumber = num => num / 3;
const number = oddNumber(39)
console.log(number);

// multiline arrow function
const evenNumber = (number1, number2) => {
    const evenNumber = number1 + number2;
    return evenNumber;
}
const total = evenNumber(120, 200);
console.log(total);