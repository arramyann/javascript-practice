// 14. Տրված է օբյեկտների զանգված.
    // const students = [
    //   { name: "Aram",   grade: 85 },
    //   { name: "Lilit",  grade: 42 },
    //   { name: "Karen",  grade: 91 },
    //   { name: "Nare",   grade: 55 },
    //   { name: "Tigran", grade: 78 },
    // ];
// 
    // ա) filter()-ով ստանալ այն ուսանողները, ովքեր հաղթահարել են (grade >= 60)։
    // բ) map()-ով ստանալ միայն անունները (string զանգված)։
    // գ) (Bonus) reduce()-ով հաշվել ԲՈԼՈՐ ուսանողների միջին գնահատականը։

    const students = [
        {name: "Aram", grade: 85},
        {name: "Lilit", grade: 42},
        {name: "Karen", grade: 91},
        {name: "Nare", grade: 55}, 
        {name:"Tigran", grade: 78},  
    ];

    //a part

    const nerds = students.filter((student) => {
        return student.grade >= 60;
    })

    console.log(nerds);

    // b part 

    const names = students.map((firstName) => {
        return firstName.name;
    })

    console.log(names);

    // c part

    const total = students.reduce((acc, student) => {
        acc += student.grade;
        
        return acc;
    }, 0);

    const average =  total/ students.length;

    console.log(average);
