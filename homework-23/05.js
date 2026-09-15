// 5.  Տրված է [3, 6, 2, 8, 1, 7, 4, 9, 5] զանգվածը։ filter()-ով ստանալ 5-ից մեծ թվերը, հետո map()-ով ամեն թիվը բազմապատկել 10-ով։ 
// Տպել վերջնական զանգվածը

const arr = [3, 6, 2, 8, 1, 7, 4, 9, 5]

const newArray = arr.filter((num) => {
    return num > 5
})

const multiplied = newArray.map((number) => {
    return number * 10
})

console.log(multiplied);