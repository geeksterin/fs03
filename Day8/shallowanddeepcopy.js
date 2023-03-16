var adfar = {
    id : 1,
    name : "Adfar Rasheed",
    address : "Kashmir",
    salary : 5000
}
// console.log(adfar)
// var newadfar = adfar  //shallow copying
var newadfar = {...adfar}
var newadfar = Object.assign({},adfar)
var newadfar = JSON.parse(JSON.stringify(adfar))

// console.log(adfar)
// console.log(newadfar)
newadfar.name = "Vikash"
console.log(adfar)
console.log(newadfar)
