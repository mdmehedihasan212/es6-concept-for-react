const phoneDetails = [
    { name: 'iphone12', brand: 'apple', price: 35000 },
    { name: 'asus50', brand: 'asus', price: 30000 },
    { name: 'A52pro', brand: 'sumsang', price: 28000 },
    { name: 'redmi15', brand: 'xaomi', price: 35000 }

];
const phoneDetails2 = {
    name: 'iphone13', brand: 'apple', price: 40000,
    name: 'realme11', brand: 'china1', price: 19000,
    name: 'vivopro', brand: 'china', price: 21000
}

// forEach on array when no needed return
phoneDetails.forEach(product => console.log(product));
// multiline forEach
phoneDetails.forEach(product => {
    console.log(product.price);
})

// map use for array when needed return
const phone = phoneDetails.map(product => product.price);
console.log(phone);

// array like argument etc apply for of
// for in on object 


// creat new array and add one object
const newPhone = { name: 'infinix', brand: 'china', price: 14000 };
const newPhoneDetails = [...phoneDetails, newPhone];
console.log(newPhoneDetails);

// remove one specific property
const removePhone = phoneDetails.filter(product => product.name !== 'iphone12');
console.log(removePhone);
