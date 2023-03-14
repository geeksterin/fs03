// let arr = [40,50,60,70,80]
// // for(let i =0;i<arr.length;i++){
// //     console.log(arr[i])
// // }
// for(let i of arr){
//     i = i+10
//     console.log(i)
// }
// function add(a,b,c,d){
//     return a+b+c+d
// }
// const result = add(2,4,6,8)
// console.log(result)

// function add(a,b,c,d,...other){
//     console.log(other)
//     return a+b+c+d
// }
// const result = add(2,4,6,8,5,6,4,6,45,3,53)
// console.log(result)
// function add(...other){
//     let sum = 0;
//     for(let i of other){
//         sum+=i
//     }
//     return sum
// }
// const result = add(2,4,6,8,5,6,4,6,45,3,53)
// console.log(result)

// let arr = [20,30,40,2]
// let brr = [30,40,50]
// let a = [...arr,...brr]
// console.log(a)
// var arr = [10,20,30]
// function add(a1,b1,c1){
//     console.log(a1,b1,c1)
// }
// // add(arr[0],arr[1],arr[2])
// add(...arr)

// var arr = [1,20,30,40]
// var newArr = arr.map(function(x,index){
//     // console.log(index,x)
//     return x*4
// })
// var newArr = arr.map((currentValue,index)=>{
//     return currentValue*currentValue
// })
// console.log(newArr)

// var arr = [1,4,7,2,3,9,8]
// console.log(arr.sort())
var arr = [10,5,5.2,-240,100,30,0,12,34]
// console.log(arr.sort())
arr.sort(function(a,b){
    return b-a
})
console.log(arr)
