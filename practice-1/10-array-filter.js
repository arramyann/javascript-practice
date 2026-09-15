// 10. Տրված է [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] զանգվածը։ Օգտագործել filter() — թողնել միայն զույգ թվերը։
// Սպասվող արդյունք. [2, 4, 6, 8, 10]

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filtered = arr.filter((num) => {
    return num % 2 === 0
})

console.log(filtered);