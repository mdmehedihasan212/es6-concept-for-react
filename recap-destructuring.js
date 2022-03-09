// array destructuring
const numbers = [12, 32, 43, 55, 64];
const [a, b, ...e] = numbers;
console.log(e);
console.log(a);

// swap
let ten = 10;
let twenty = 20;
[ten, twenty] = [twenty, ten]
console.log(ten);
console.log(twenty);

// object destructuring
const profile = {
    name: 'mehedi',
    age: 25,
    address: 'bangladesh'
}

const { name } = profile;
console.log(name);

// nested object destructuring
const about = {
    name: 'mehedi',
    age: 25,
    address: {
        home: 'barishal',
        thana: 'kotwali',
        distric: 'barisal',
        country: 'bangladesh'
    }

}
console.log(about.address);

// destructuring function parameter
const aboutMe = ({ job, salary }) => {
    console.log(salary, job);
}
const me = {
    job: 'salesman',
    salary: 16000
}
aboutMe(me)