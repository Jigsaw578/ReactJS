console.log("Hello World 2")
var p1 = 1;
let p2 = 2;
const p3 = 3;
console.log("p1=",p1, p2 ,p3)
function getname() {
    var name = "My name is ABC"
    return name
}
a = 1+"2"
console.log(a)
let c = {
    name: "a"
}
let d =c

console.log( d ===c)

console.log(typeof(a));
console.log(++p2);

var a = 5
var output = ++a
console.log('output: ', output)

var a = 5
var output = a++
console.log('output: ', output)

var a = 5
var output = a++ + --a
console.log('output: ', output)

x = 3
y = x
console.log(x+=y);
console.log(x-=y);
console.log(x*=y);
console.log(x/=y);
console.log(x**=y);

var fullname = "Vinh dau buoi"
console.log(fullname.indexOf("d"));

let myString = "Hello, world!"
console.log(myString.length);
console.log(myString.indexOf("world"));
console.log(myString.slice(0,5));
console.log(myString.replace("world", "JavaScript"));
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());

let  myNumber = 3.14159265359
console.log(myNumber.toFixed(3));
console.log(myNumber.toString());
console.log(parseInt("123"));
console.log(parseFloat("3.14"));

var arr = [1,2,3]
arr.push(4)
a= arr.pop()
b = arr.unshift(2,6,8)
console.log(arr);
console.log(b);

const mySet = new Set();

mySet.add(1);

mySet.add(2);

mySet.add(2);

mySet.add(3);

console.log(mySet);