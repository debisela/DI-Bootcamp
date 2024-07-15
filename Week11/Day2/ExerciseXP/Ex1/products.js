/*
Create a file named products.js.

Inside products.js, create an array of objects, each representing a product with properties like name, price, and category.

Export this array using the Common JS syntax.

Create another file named shop.js.

In shop.js, require the product objects from the products.js module.

Create a function that takes a product name as a parameter and searches for the corresponding product object.

Call this function with different product names and print the details of the products.

Run shop.js and verify that the correct product details are displayed.*/

const products = [
    {
      name: "Laptop",
      price: 999.99,
      category: "Electronics"
    },
    {
      name: "Smartphone",
      price: 799.99,
      category: "Electronics"
    },
    {
      name: "Coffee Maker",
      price: 49.99,
      category: "Home Appliances"
    },
    {
      name: "Electric Toothbrush",
      price: 29.99,
      category: "Personal Care"
    },
    {
      name: "Blender",
      price: 59.99,
      category: "Home Appliances"
    }
  ];
  //console.log(products);

  module.exports={products}
  
