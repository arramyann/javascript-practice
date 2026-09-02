// 8.  Տրված է [3, 7, 1, 9, 4, 6, 2, 8, 5] զանգվածը։
// ա) Տպել առաջին և վերջին տարրը։
// բ) Տպել զանգվածի երկարությունը։
// գ) Ավելացնել 10 թիվը վերջում։
// դ) Տպել թարմացված զանգվածը։

const arr = [3, 7, 1, 9, 4, 6, 2, 8, 5];

console.log(`First number: ${arr[0]}`);
console.log(`Last number: ${arr[arr.length-1]}`);

console.log(`The length of array is: ${arr.length}`);

arr.push(10)


for(let i = 0; i < arr.length; ++i){
    console.log(arr[i]);
}


console.log(arr);