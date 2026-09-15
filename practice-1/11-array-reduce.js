// 11. Տրված է [5, 10, 15, 20, 25] զանգվածը։ Օգտագործել reduce() — հաշվել բոլոր թվերի ամբողջ գումարը։
// Սպասվող արդյունք. 75
// (Հուշ: reduce-ը ստանում է callback և initial value

const arr = [5, 10, 15, 20, 25];

const sum = arr.reduce((acc, num) => {
    return acc + num;
}, 0);

console.log(sum);