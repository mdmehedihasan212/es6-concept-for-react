const phoneDetails = [
    { name: 'iphone12', brand: 'apple', price: 35000 },
    { name: 'asus50', brand: 'asus', price: 30000 },
    { name: 'A52pro', brand: 'sumsang', price: 28000 },
    { name: 'redmi15', brand: 'xaomi', price: 35000 }

];

const phone = phoneDetails.filter(product => product.price <= 30000);
console.log(phone);

const phoneName = phoneDetails.filter(product => product.name === 'iphone12');
console.log(phoneName);