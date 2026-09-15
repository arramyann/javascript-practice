// 7.  Տրված է.
// const products = [
//   { name: "Laptop",  price: 1200 },
//   { name: "Phone",   price: 800  },
//   { name: "Tablet",  price: 450  },
//   { name: "Monitor", price: 350  },
//   { name: "Headset", price: 150  },
// ];

// ա) filter()-ով ստանալ 500-ից թանկ ապրանքները։
// բ) map()-ով ԲՈԼՈՐ ապրանքներից ստեղծել string-ների զանգված այս ձևաչափով. "Laptop - $1200"
// գ) reduce()-ով հաշվել ԲՈԼՈՐ ապրանքների ընդհանուր արժեքը։


const products = [
    { name: "Laptop",  price: 1200 },
    { name: "Phone",   price: 800  },
    { name: "Tablet",  price: 450  },
    { name: "Monitor", price: 350  },
    { name: "Headset", price: 150  },
];

const filtered = products.filter((product) => {
  return product.price > 500  
})

const mapped = filtered.map((product) => {
    return `${product.name} - $${product.price}`
})

const sum = filtered.reduce((acc, product) => {
    return product.price + acc
},0);
console.log(filtered);
console.log();
console.log(mapped);
console.log();
console.log(sum);