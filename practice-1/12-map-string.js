// 12. Տրված է ["anna", "bob", "charlie", "diana"] զանգվածը։ Օգտագործել map() — ամեն անուն սկսի մեծատառից։
// Սպասվող արդյունք. ["Anna", "Bob", "Charlie", "Diana"]
// (Հուշ: string-ում կարող ես ինդեքսով վերցնել առանձին symbol

const arr = ["anna", "bob", "charlie", "diana"];

const names = arr.map((name) => {
    return name[0].toUpperCase() + name.slice(1);
    
})

console.log(names);