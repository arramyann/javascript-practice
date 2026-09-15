// 13. Տրված է [10, -3, 5, -7, 0, 8, -1, 4] զանգվածը։ Նախ filter()-ով վերցնել միայն դրական թվերը (> 0),
//  հետո reduce()-ով հաշվել դրանց գումարը։ Տպել և՛ ֆիլտրված զանգվածը, և՛ գումարը։

const arr = [10, -3, 5, -7, 0, 8, -1, 4];

const positive = arr.filter((num) => {
    return num > 0;
})
console.log(positive);

const sum = positive.reduce((acc, num) => {
    return num + acc;
}, 0);

console.log(sum);
