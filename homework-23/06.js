// 6.  Տրված է [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] զանգվածը։ Օգտագործել reduce() — հաշվել ԲՈԼՈՐ թվերի արտադրյալը 
// (բազմապատկում, ոչ թե գումար)։
// Սպասվող արդյունք. 3628800

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const multiplied = arr.reduce((accumulator, num) => {
    return accumulator * num
}, 1);

console.log(multiplied);