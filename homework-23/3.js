// 3.  Տրված է [4, 9, 16, 25, 36] զանգվածը։ Օգտագործել map() — ստեղծել նոր զանգված, 
// որտեղ ամեն տարրի քառակուսի արմատն է։
// Սպասվող արդյունք. [2, 3, 4, 5, 6]    
// (Հուշ: Math.sqrt())

const arr = [4, 9, 16, 25, 36]

const squareRoot = arr.map((num) => {
    return Math.sqrt(num)
})

console.log(squareRoot);

