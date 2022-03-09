const profile = {
    name: 'mehedi',
    job: 'salesman',
    salary: 16000
}

// fetch
// const url = ``;
// false(url)
//     .then(res => res.json())
//     .then(data => console.log(data))

// object strinify and parse
const profileStrinify = JSON.stringify(profile);
console.log(profileStrinify);

const profileParse = JSON.parse(profileStrinify);
console.log(profileParse);

// object key and value
const keys = Object.keys(profile);
console.log(keys);

const value = Object.values(profile);
console.log(value);
