// var newobj = {
//     name : "Adfar",
//     age : 25,
//     salary :5000
// }
// console.log(Object.keys(newobj))
// console.log(Object.values(newobj))
//Date Object
// var a = new Date()
// console.log(a.toLocaleString())
// var a = new Date(360000000) //
// console.log(a)
// var a = new Date("Mar 15, 2023 08:35:23")
// console.log(a.toLocaleString())
// var a = new Date(2022,10,13,8,45,56)
// console.log(a.toLocaleString())

var date = new Date()
console.log(date)
var day = date.getDate()
console.log(day)
var month = date.getMonth()
console.log(month)
var year = date.getFullYear()
console.log(year)
console.log("Date is :",day,"/",month,"/",year)
var h = date.getHours()
console.log(h)
var m = date.getMinutes()
console.log(m)
var s = date.getSeconds()
console.log(s)
console.log("Time is :",h, ":",m,":",s)