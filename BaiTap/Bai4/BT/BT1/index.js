function check(S) {
    if (S <= 70) {
        return "D"
    } else if (S <= 80) {
        return "C"
    } else if (S <= 90) {
        return "B"
    } else if (S <= 100) {
        return "A"
    }
}

function average(S) {
    let sum = 0
    for (let i = 0; i < S.length; i++) {
        sum += S[i];    
    }
    return (sum/S.length).toFixed(2)
}

S1 = [60 , 80 , 94 , 72 , 85]
S2 = [90 , 87 , 94 , 98 , 85]
S3 = [60 , 78 , 56 , 72 , 55]

console.log("S1 = [60 , 80 , 94 , 72 , 85]");
console.log(average(S1));
console.log("Grade :", check(average(S1)));

console.log("S2 = [90 , 87 , 94 , 98 , 85]");
console.log(average(S2));
console.log("Grade :", check(average(S2)));

console.log("S3 = [60 , 78 , 56 , 72 , 55]");
console.log(average(S3));
console.log("Grade :", check(average(S3)));