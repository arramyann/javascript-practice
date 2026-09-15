// 2.  Գրել maxOfThree(a, b, c) ֆունկցիա, որն ընդունում է երեք թիվ և վերադարձնում ամենամեծը։
// (Math.max օգտագործելն արգելված է — լուծել if/else-ով)

function maxOfThree(a,b,c){
    
    if(a > b){
        if(a > c) return a;
        else return c;
    }
    else if(b > c) return b;
    else return c;
}

console.log(maxOfThree(10, 8, 12));