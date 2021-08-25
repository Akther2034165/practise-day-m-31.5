const arr = [
  { name: "book", price: 500 },
  { name: "laptop", price: 5000 },
  { name: "phone", price: 5000 },
];

const findingObj = arr.find((prices) => prices.price == 5000);
console.log(findingObj);
