const phoneDetails = [
    { name: 'iphone12', brand: 'apple', price: 35000 },
    { name: 'asus50', brand: 'asus', price: 30000 },
    { name: 'A52pro', brand: 'sumsang', price: 28000 },
    { name: 'redmi15', brand: 'xaomi', price: 35000 }

];

phoneDetails.forEach(product => console.log(product));
phoneDetails.forEach(product => {
    console.log(product.price);
})
