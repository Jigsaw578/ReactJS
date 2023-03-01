function maxnumber(S) {
    let max = S[0]
    for (let i = 0; i < S.length; i++) {
        if (max< S[i]) {
            max = S[i]
        }
    }
    return max
}

function minnumber(S) {
    let min = S[0]
    for (let i = 0; i < S.length; i++) {
        if (min> S[i]) {
            min = S[i]
        }
    }
    return min
}

function check(S1, S2) {
    if (minnumber(S1) <= minnumber(S2) && maxnumber(S1) >= maxnumber(S2)) {
        return true
    }
    else return false
    
}

S1 = [5, 10 , 3 , 16 , 8]
S2 = [1 , 18 , 7]
S3 = [6 , 9 , 13 , 8]
console.log("S1 = [5, 10 , 3 , 16 , 8]");
console.log("S2 = [1 , 18 , 7]");
console.log("S3 = [6 , 9 , 13 , 8]");
console.log("Check(S1, S2) =", check(S1,S2));
console.log("Check(S1, S3) =", check(S1,S3));
console.log("Check(S2, S1) =", check(S2,S1));
