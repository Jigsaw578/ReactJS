let goc = 10000000
console.log("Tien goc = ", goc);
let rate = 0.09
console.log("Lãi xuất =", rate);
let month = 5
console.log("Tháng vay =", month);

total = ((goc/month)+((goc*rate)/month)).toFixed(2)
console.log("Tổng tiền phải trả hằng tháng =", total);