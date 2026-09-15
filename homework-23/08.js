// 8.  Գրել countVowels(str) ֆունկցիա, որը հաշվում է տրված string-ի ձայնավորների (a, e, i, o, u) քանակը։
    // Օր.՝ countVowels("JavaScript") → 3
    // (Լուծել loop-ով)

    function countVowels(str){
        let i = 0
        let counter = 0
        while(str[i]){
            if (
                    str[i] == 'a' ||
                    str[i] == 'e' ||
                    str[i] == 'i' ||
                    str[i] == 'o' ||
                    str[i] == 'u'
                ){
                    counter++;
                }
                i++
        }
        return counter;
    }

    console.log(countVowels("JavaScript"));