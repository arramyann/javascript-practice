// 4.  Տրված է ["JavaScript", "Python", "C", "Java", "Go", "TypeScript"] զանգվածը։
// Օգտագործել filter() — թողնել միայն այն լեզուները, որոնց անվան երկարությունը 4-ից մեծ է։
// (Հուշ: .length)

const arr = ["JavaScript", "Python", "C", "Java", "Go", "TypeScript"]

const newArray = arr.filter((str) => {
    return str.length > 4
})

console.log(newArray);