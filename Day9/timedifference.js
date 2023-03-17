var date1 = new Date()
var date2 = new Date("09/02/2023")
// var diffdate = date2-date1
var diffdate = date2.getTime() - date1.getTime()
var diffdays = (date2.getTime() - date1.getTime())/(1000*60*60*24)
console.log(diffdays)