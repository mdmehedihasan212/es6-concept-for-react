const numbers = [11, 21];

// const first = numbers[0];
// const second = numbers[1];

const [first, second] = [numbers]

// functional 
function sum(num1, num2) {
    const total = [num1 + num2]
    return total;
}
const [one, two] = sum(100, 120);

// object
const student = {
    name: 'md ndmasda hasan',
    age: 26,
    phone: 123456,
    city: 'barishal City',
    country: 'bangladesh',
    address: ['rupaa', 'aafa', 'afja'],
    job: {
        title: 'salesman',
        worktime: '8am to 9pm',
        place: 'barishal sadar',
        salary: 15500
    },
    family: {
        father: {
            name: 'md nmdadul hasan',
            job: 'bd polis'
        },
        mother: 'sulina begum',
        brother: 'sonell hasan',
        sister: 'elazb besaa',
    }
};
const { title, salary } = student.job;
console.log(title, salary);
console.log(student.family.father);
