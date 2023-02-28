function maxnumber(S) {
    let max = S[0]
    for (let i = 0; i < S.length; i++) {
        if (max< S[i]) {
            max = S[i]
        }
    }
    return max
}
S = [5, 10 ,3 ,16 ,8]
Max = maxnumber(S)
console.log("S = [5, 10 ,3 ,16 ,8]");
console.log("Max = maxnumber(S) =", Max);
