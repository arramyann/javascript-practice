// 9.  Տրված է [5, 3, 8, 1, 9, 2, 7, 4, 6] զանգվածը։ Math.min / Math.max օգտագործելն արգելված է։ 
// Loop-ի միջոցով գտնել ամենամեծ և ամենափոքր թվերը։ Տպել երկուսն էլ։

const arr = [5, 3, 8, 1, 9, 2, 7, 4, 6]
let max = arr[0]
let min = arr[0]
for(let i = 1; i < arr.length; ++i){
    if(arr[i] > max){
        max = arr[i]
    }
    if(arr[i] < min){
        min = arr[i]
    }
}

console.log(min, max);