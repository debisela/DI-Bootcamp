const products = require('./products.js')
console.log(products);

function searchProduct(productName) {
const product = products.find(p => p.name.toLocaleLowerCase() === productName.toLocaleLowerCase());
if (product){
    console.log(`product found, ${product.name}, ${product.price}, ${product.category}`);
}
else{
    console.log(`Sorry, product not found`);
}
}

//test
searchProduct('blender');
searchProduct('smartphone');
searchProduct('phone')