// index.js
const { randomProductFactory, createRandomProduct } = require("./products"); //Functions imported from the products module. They are likely used to generate product data.
const { writeJSONFile, readJSONFile } = require("./helpers.js");  //Functions imported from the helpers.js module. writeJSONFile is used to write data to a JSON file, and readJSONFile is used to read data from a JSON file.

function run() {
  let products = readJSONFile("./data", "products.json");
  console.log(products);
  if (process.argv[3]) {
    products.push(...randomProductFactory(process.argv[3]));
  } else {
    products.push(createRandomProduct());
  }
  writeJSONFile("./data", "products.json", products);
}

run();





/*
//Delete the content in the products.json file.
function run() {
  let products = readJSONFile("./data", "products.json");
  console.log(products);
  if (process.argv[3]) {
    console.log(randomProductFactory(process.argv[3]));
  } else {
    products.push(createRandomProduct());
    writeJSONFile("./data", "products.json", products);
  }
}

*/

/*
npm start runs the program

function run() {
  let products = readJSONFile("./data", "products.json"); //Reads the contents of products.json from the ./data directory using readJSONFile. Stores the contents in the products variable.
  console.log(products);  //Logs the contents of products to the console.
  if (process.argv[3]) {  //Checks if a command-line argument is provided at index 3 (process.argv[3]). If an argument is provided (process.argv[3] is truthy), it: Calls randomProductFactory with the argument (process.argv[3]). 
    console.log(randomProductFactory(process.argv[3])); //Logs the result of randomProductFactory(process.argv[3]) to the console.
  } else { // If no argument is provided (process.argv[3] is falsy), it:
    products = createRandomProduct(); //Calls createRandomProduct to generate a new product. Assigns the new product to the products variable.
    writeJSONFile("./data", "products.json", products); //Writes the new product data to products.json in the ./data directory using writeJSONFile.
  }
}

run();


//It's not quite working. The one object keeps getting replaced. Instead, we should have an array of objects, and every time we create a new object, we should push it into the array and then replace the entire file with the new array.

*/




/*

`npm start` runs the program
Summary
The run function serves two primary purposes based on the presence of a command-line argument:

If a command-line argument (process.argv[3]) is provided:

Logs the result of randomProductFactory(process.argv[3]).
If no command-line argument is provided:

Reads the contents of products.json and logs it.
Generates a new product using createRandomProduct.
Writes the new product data back to products.json.
This setup allows the script to either process a specific command-line input to generate a product or to create and save a new random product when no specific input is given.

*/

/*
In Node.js, the process.argv array contains command-line arguments passed when the Node.js process was launched.

process.argv Array
process.argv is an array where:
process.argv[0] is the path to the Node.js executable.
process.argv[1] is the path to the JavaScript file being executed.
process.argv[2] and onwards are any additional command-line arguments provided by the user.
Example Breakdown
Consider the following command:

`node index.js create product1`


Here's how process.argv would be populated:

process.argv[0]: Path to the Node.js executable (e.g., /usr/local/bin/node).
process.argv[1]: Path to the JavaScript file being executed (e.g., /path/to/index.js).
process.argv[2]: The first argument passed by the user (e.g., create).
process.argv[3]: The second argument passed by the user (e.g., product1).

Using process.argv[3]
When the script checks process.argv[3], it is accessing the second user-provided argument (index 3 in the array).


if (process.argv[3]) {
  console.log(randomProductFactory(process.argv[3]));
} else {
  products = createRandomProduct();
  writeJSONFile("./data", "products.json", products);
}


Explanation
process.argv[3]: Refers to the second command-line argument provided by the user.
If an argument exists at this index, process.argv[3] will be a truthy value (e.g., product1).
If no such argument exists, process.argv[3] will be undefined or falsy.

Example Usage
Given the command:

node index.js create product1

process.argv[3] would be product1.
The script would then execute randomProductFactory('product1') and log its result.

Given the command:

node index.js

process.argv[3] would be undefined.
The script would generate a random product using createRandomProduct() and save it to products.json.

Summary
The "index 3" refers to the fourth element in the process.argv array, which is the second argument passed by the user when running the Node.js script. This allows the script to conditionally execute different logic based on whether a specific argument is provided.

*/


/*

`npm start` runs the program


function run() {
  if (process.argv[3]) {  
    console.log(randomProductFactory(process.argv[3]));
  } else {
    const newProduct = createRandomProduct();
    writeJSONFile("./data", "products.json", newProduct);
  }
}

//if (process.argv[3]) { ... }

//process.argv is an array that contains command-line arguments passed to the Node.js process.
//process.argv[0] is the path to the Node.js executable.
//process.argv[1] is the path to the script being executed.
//process.argv[2] is the first command-line argument after the script name.
//process.argv[3] refers to the fourth command-line argument after the script name (process.argv[0] is always node, process.argv[1] is always the script name and Node.js version.


The provided JavaScript function `run()` performs different actions based on the command-line arguments (`process.argv`). Here's a breakdown of what each part does:

### Function Explanation

```javascript
function run() {
  if (process.argv[3]) {
    console.log(randomProductFactory(process.argv[3]));
  } else {
    const newProduct = createRandomProduct();
    writeJSONFile("./data", "products.json", newProduct);
  }
}
```

### Breakdown

1. **`process.argv`:**
   - `process.argv` is an array that contains the command-line arguments passed to the Node.js process. 
   - `process.argv[0]` is the path to the Node.js executable.
   - `process.argv[1]` is the path to the JavaScript file being executed.
   - `process.argv[2]` and beyond are the actual command-line arguments provided when running the script.

2. **Condition (`if (process.argv[3])`):**
   - Checks if there is a command-line argument at index 3 (`process.argv[3]`).
   - If `process.argv[3]` exists (is truthy), it means there is a specific argument provided.

3. **`randomProductFactory(process.argv[3])`:**
   - Calls a function `randomProductFactory` with `process.argv[3]` as an argument.
   - This suggests that `process.argv[3]` might be used to determine or generate a specific type of product or product information.
   - The result of `randomProductFactory(process.argv[3])` is then logged to the console using `console.log`.

4. **Else Block:**
   - If there is no `process.argv[3]` (the condition is falsy), meaning no specific argument was provided:
   - `createRandomProduct()` function is called to generate a new random product.
   - `writeJSONFile("./data", "products.json", newProduct)` is called to write the newly created product (`newProduct`) to a JSON file named `products.json` located in the `./data` directory.

### Summary

In summary, the `run()` function is designed to handle command-line arguments when the script is executed. If a specific argument (`process.argv[3]`) is provided, it likely triggers a specific action related to generating or retrieving product data. If not, it generates a new random product and saves it to a JSON file. This approach allows the script to behave differently based on the user's input when running it from the command line.


*/