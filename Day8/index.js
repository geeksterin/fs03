// var arr = [10,20,30,40,50,-30,-40,-43]
// var filterArray = arr.filter((item,index)=>{
//     return item > 0
// })
// console.log(filterArray)
 var arr = [10,20,30,40,50]
 var acc = arr.reduce((total,item)=>{
    return total + item
 })
console.log(acc)
var arr = [1.7 ,2.4,11.9 , 20.9]
function sum(total,item){
    return total + Math.round(item)
}
console.log(arr.reduce(sum,0))