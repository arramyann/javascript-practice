// 10. Տրված է [1, 2, 3, 4, 5] զանգվածը։ Օգտագործել map() — ստեղծել օբյեկտների զանգված, որտեղ ամեն օբյեկտ ունի.
//     • value — թիվն ինքը
    // • isEven — true, եթե զույգ է, false, եթե կենտ
// 
    // Սպասվող արդյունք.
    // [
    //   { value: 1, isEven: false },
    //   { value: 2, isEven: true  },
    //   { value: 3, isEven: false },
    //   { value: 4, isEven: true  },
    //   { value: 5, isEven: false },
    // ]




const arr = [1, 2, 3, 4, 5]

const obj  = arr.map((num) => {
    return {
        value: num,
        isEven: num % 2 === 0
    }
})

console.log(obj);