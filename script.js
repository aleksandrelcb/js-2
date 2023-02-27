// 1

const massiveNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const elementCount = massiveNumber.length;
console.log(elementCount, "Number of arrays");

const addingNumber = massiveNumber.map((i) => (x += i), (x = 0)).reverse()[0];
console.log(addingNumber, "sum");

const elementDivision = addingNumber / elementCount;
console.log(elementDivision, "division");

// 2
const elementObject = [
  {
    name: "aleksandre",
    age: "21",
  },
  {
    name: "giorgi",
    age: "26",
  },
  {
    name: "mate",
    age: "31",
  },
  {
    name: "giorgi",
    age: "41",
  },
  {
    name: "nika",
    age: "27",
  },
  {
    name: "avto",
    age: "11",
  },
];
console.log(elementObject, "user info");

// 3

const ProductName = {
  productTitle: "iPhone 14",
  productDescription: "RAM(8gb)",
  productPrice: 2500,
  shopAddresses: "alta.ge",
  productMemoryInGB: 128,
  productResolution: "1290 x 2796 pixels,",
};

// console.log(ProductName);

console.log("Product name is", ProductName["productTitle"]);
console.log("Product price is", ProductName["productPrice"]);
console.log("Product  resolution  is", ProductName["productResolution"]);
console.log("and you can buy it at ", ProductName["shopAddresses"]);
