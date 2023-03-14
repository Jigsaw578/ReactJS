// console.log("Hello World 2")
// var p1 = 1;
// let p2 = 2;
// const p3 = 3;
// console.log("p1=",p1, p2 ,p3)
// function getname() {
//     var name = "My name is ABC"
//     return name
// }
// a = 1+"2"
// console.log(a)
// let c = {
//     name: "a"
// }
// let d =c

// console.log( d ===c)

// console.log(typeof(a));
// console.log(++p2);

// var a = 5
// var output = ++a
// console.log('output: ', output)

// var a = 5
// var output = a++
// console.log('output: ', output)

// var a = 5
// var output = a++ + --a
// console.log('output: ', output)

// x = 3
// y = x
// console.log(x+=y);
// console.log(x-=y);
// console.log(x*=y);
// console.log(x/=y);
// console.log(x**=y);

// var fullname = "Vinh dau buoi"
// console.log(fullname.indexOf("d"));

// let myString = "Hello, world!"
// console.log(myString.length);
// console.log(myString.indexOf("world"));
// console.log(myString.slice(0,5));
// console.log(myString.replace("world", "JavaScript"));
// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());

// let  myNumber = 3.14159265359
// console.log(myNumber.toFixed(3));
// console.log(myNumber.toString());
// console.log(parseInt("123"));
// console.log(parseFloat("3.14"));

// var arr = [1,2,3]
// arr.push(4)
// a= arr.pop()
// b = arr.unshift(2,6,8)
// console.log(arr);
// console.log(b);

// const mySet = new Set();

// mySet.add(1);

// mySet.add(2);

// mySet.add(2);

// mySet.add(3);

// console.log(mySet);

var arr = [3, 8 , 1]
// console.log(arr.join("-"));

// var arr1 = ["A", "b" , 3]
// var arr2 = [5, "d" , 3]
// console.log(arr1.splice(1, 0, "h"));
// console.log(arr1);

// function getnam(name) {
//     return `Xin chao ${name}`
// }
// console.log(getnam("vinhbuoi")); 

// function multiply(a, b, callback) {
//     var result = a * b;
//     callback(result);
// }
// function print(result) {
//     console.log(result);
// }
// multiply(5, 10 , print)

// function myFn(current) {
//     console.log(current);
// }

// arr.forEach(myFn)
// arr3 =   arr.map(function (value, index, array) {
//     console.log(value, index, array);
//     return value * 2
// })
// console.log(arr3);
// arr4 = arr.filter(function(value){
//     return value>7
// })
// console.log(arr4);

arr5 = arr.some(function(value){
    return value>7
})
console.log(arr5);

arr6 = arr.every(function(value){
    return value>7
})
console.log(arr6);

// arr7 = arr.reduce(function(previonvalue, current, index, array){
//     return previonvalue + current
// }, 0)
// console.log(arr7);
// var myInfo = {
//     name: "A",
//     age: 20
// }
// var myInfo2 = new Object()
// myInfo2.name = "A"
// myInfo2.age = 20

// console.log(myInfo.name); 

// function Person(name, age, method) {
//     this.name = name;
//     this.age = age;
//     this.method = method
// }
// Person.prototype.avatar = String
// const user = new Person("A", 20, function(){
//     console.log("Run");
// })
// console.log(user);

try {
    var x = y+ 10
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}finally{
    console.log('try catch block finished');
}