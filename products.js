const { faker } = require("@faker-js/faker");

//This function generates a single random product object using the faker library.
function createRandomProduct() {
  console.log("hi");
  const product = {
    _id: faker.datatype.uuid(),  // Generates a unique identifier (UUID) for the product
    name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,  // Generates a product name using an adjective and product name
    description: faker.commerce.productDescription(),  // Generates a description for the product
    brand: faker.company.name(),  // Generates a random company name for the brand
    price: faker.commerce.price(10, 200, 2, "$"),  // Generates a price between $10 and $200 with 2 decimal places
    currency: "USD",  // Sets the currency to USD
    inStock: faker.datatype.boolean(),  // Generates a boolean value indicating if the product is in stock
    attributes: {
      material: faker.commerce.productMaterial(),  // Generates a random material for the product
      color: faker.vehicle.color(),  // Generates a random color for the product
    },
  };
  return product;  // Returns the generated product object
}



//This function generates an array of random product objects.
function randomProductFactory(number) {  //number: The number of random product objects to generate.
  const products = [];  //Initializes an empty array products.
  for (let i = 0; i < number; i++) {  //Uses a for loop to generate number of random product objects by calling createRandomProduct and pushing each generated product into the products array.
    products.push(createRandomProduct());
  }
  return products; //Returns the array products containing the specified number of random product objects.
}

module.exports = { createRandomProduct, randomProductFactory };  // Exports the createRandomProduct and randomProductFactory functions so they can be imported and used in other modules.


/*
// products.js
const { faker } = require("@faker-js/faker");

function createRandomProduct() {
  const product = {
    _id: faker.datatype.uuid(),
    name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
    description: faker.commerce.productDescription(),
    brand: faker.company.name(),
    price: faker.commerce.price(10, 200, 2, "$"),
    currency: "USD",
    inStock: faker.datatype.boolean(),
    attributes: {
      material: faker.commerce.productMaterial(),
      color: faker.vehicle.color(),
    },
  };
  return product;
}

//console.log(createRandomProduct());

function randomProductFactory(number) {
  const products = [];
  for (let i = 0; i < number; i++) {
    products.push(createRandomProduct());
  }
  return products;
}

//console.log(randomProductFactory(5));

module.exports = { createRandomProduct, randomProductFactory };

*/