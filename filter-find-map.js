const phoneDetails = [
    { name: 'iphone12', brand: 'apple', price: 35000 },
    { name: 'asus50', brand: 'asus', price: 30000 },
    { name: 'A52pro', brand: 'sumsang', price: 28000 },
    { name: 'redmi15', brand: 'xaomi', price: 35000 }

];

const phone = phoneDetails.filter(product => product.price <= 30000);
console.log(phone);

const phoneName = phoneDetails.filter(product => product.name.includes('i'));
console.log(phoneName);

// find
const phoneDetails2 = [
    { name: 'iphone', brand: 'apple', price: 35000 },
    { name: 'asus', brand: 'asus', price: 30000 },
    { name: 'a52', brand: 'sumsang', price: 28000 },
    { name: 'redmi15', brand: 'xaomi', price: 35000 }

];

const brand = phoneDetails2.find(product => product.name.includes('s'))
console.log(brand);

// map
const phoneDetails3 = [
    { name: 'iphone', brand: 'apple', price: 35000 },
    { name: 'asus', brand: 'asus', price: 30000 },
    { name: 'a52', brand: 'sumsang', price: 28000 },
    { name: 'redmi15', brand: 'xaomi', price: 35000 }

];

const phoneName1 = phoneDetails3.map(product => product.name)
console.log(phoneName1);

