const student = {
  name: "Akther",
  info: {
    id: 165,
    height: 5.5,
    profession: "developer",
    address: { vill: "khowaznagar", city: "ctg" },
  },
};
console.log(student.info.address);
console.log(student.info.tech?.address);
