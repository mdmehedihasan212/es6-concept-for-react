// turnary operator
let money = 1500;
let payment = 'card'
let food1 = money > 1200 || payment === 'cash' ? 'briyani' : 'ruti';
console.log(food1);

// another ex
let money1 = 2000;
let payment2 = 'cash';
let food2 = money1 <= 1500 || payment2 === 'card' ? 'candrobindu' : 'mohasin';
console.log(food2);

// conversion number to string
const num = 123;
const numStr = num + '';
console.log(num);
console.log(numStr);

// conversion string to number
const numParse = +numStr;
console.log(numParse);

// function ternary no return
const isActive = true;
const showAllUser = () => console.log('All user avilable');
const hideAllUser = () => console.log('All user not avilable');
isActive ? showAllUser() : hideAllUser();

const isValue = false
const totalValue = () => console.log('Clear all value');
const halfValue = () => console.log('show half value');
isValue ? totalValue() : halfValue();

// toggle
isActive = !isActive