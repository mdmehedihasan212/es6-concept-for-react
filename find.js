const phoneDetails = [
    { name: 'iphone', brand: 'apple', price: 35000 },
    { name: 'asus', brand: 'asus', price: 30000 },
    { name: 'a52', brand: 'sumsang', price: 28000 },
    { name: 'redmi15', brand: 'xaomi', price: 35000 }

];

const brand = phoneDetails.find(product => product.name.includes('s'))
console.log(brand);