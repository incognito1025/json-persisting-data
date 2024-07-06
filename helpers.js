// helpers js
const fs = require("node:fs"); //This imports the Node.js fs module, which provides file system-related functionality
const { writeFileSync } = require("node:fs");  //Destructures the writeFileSync function from the fs module. writeFileSync is a synchronous method provided by Node.js to write data to a file. 
const { readFileSync } = require("fs"); //This imports the readFileSync function from Node.js's built-in fs module. readFileSync is a synchronous method used to read data from a file.

//The writeJSONFile function simplifies the process of writing JSON data to a file synchronously in Node.js. It converts the input data into a JSON string using JSON.stringify and then uses writeFileSync to write this string to the specified file path. This function is useful for tasks such as saving configuration files, storing application data, or exporting data in JSON format.

function writeJSONFile(path, fileName, data) {  //parameters `path`: Specifies the directory path where the file will be saved, `fileName`: Specifies the name of the file to be created or overwritten, `data`: Represents the JavaScript object or value that you want to write to the file as JSON.
  data = JSON.stringify(data); //Converts the data object into a JSON-formatted string. This is necessary because writeFileSync expects a string or buffer as its data argument.

  return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" }); //Writes the JSON string (data) to a file located at the specified path and fileName. { encoding: "utf-8" }: Specifies the encoding format for the file, ensuring that it's written as UTF-8, which is a widely supported character encoding.
} //The function returns the result of writeFileSync, which is typically undefined unless an error occurs during the file write operation.

// The readJSONFile function simplifies the process of reading JSON data from a file synchronously in Node.js. It leverages readFileSync to retrieve the contents of a specified file path (./${path}/${fileName}) and returns this data as a UTF-8 encoded string. This function is useful for tasks such as loading configuration files, reading stored application data, or importing JSON-formatted data into your Node.js applications.


// helpers.js  Now we were able to write one product, but the next one caused an error. If we log the typeof products in the run function, we will see that it is a string. The data from the file must be converted from a string to a JavaScript datatype.Return to the helpers file and update the readJSONFile() function to convert the JSON string into an object:
function readJSONFile(path, fileName) {
  const collection = readFileSync(`${path}/${fileName}`, "utf8");
  return collection ? JSON.parse(collection) : [];
}



/*
// We get an error because the file is empty. We can write logic to create an empty array if the file is empty.
function readJSONFile(path, fileName) {
  const collection = readFileSync(`${path}/${fileName}`, "utf8");
  return collection ? collection : [];
}

*/


/*

function readJSONFile(path, fileName) { //Parameters: `path`: Specifies the directory path where the JSON file is located. fileName: Specifies the name of the JSON file to be read.
  return readFileSync(`./${path}/${fileName}`, "utf8"); // readFileSync: Reads the contents of the file located at ./${path}/${fileName}. "utf8": Specifies the encoding format for the file. In this case, it's UTF-8, which is a common encoding for text files including JSON.
} //The function returns the contents of the JSON file as a string. If the file is not found or an error occurs during reading, Node.js will throw an error.


*/
module.exports = {
  writeJSONFile,
  readJSONFile
};


/*
Remember, JSON is like a JavaScript object and is similar in many ways. One way they differ is that JSON is designed to be one long string of data. This is because when data is sent over the internet, it is often sent as long strings, and the conversion from string to object and object to string is very common.

There are two methods that JavaScript has to assist with the conversions. 
JSON.parse()
JSON.stringify()

function writeJSONFile(path, fileName, data) {
  data = JSON.stringify(data);
  return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" });
}




*/