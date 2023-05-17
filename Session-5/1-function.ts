// Named function
function add(x:number,y:number):number
{
    return x+y;
}

// Anonymus Function
let myAdd = function(x:number,y:string):string {
    return x+y;
}

// Arrow Function

let myAdd1 = (x:number,y:number):number => x + y;


console.log(add(5,7))

console.log(myAdd(5,"7"))
console.log(typeof(myAdd(5,"7")))

console.log(myAdd1(10,20))
console.log(typeof(myAdd1(10,20)))


function printmsg(msg:string):void{
    console.log(msg)
}

printmsg("hi")

function getTime():any{
    return new Date().toDateString
}

console.log(typeof(getTime()))
console.log(getTime())

function summ(x:number,y:number,z:number):number{
    return x + y + z 
}

function sum11(x:number,y:number,z?:number):number{
    return x + y + (z || 0); 
}

function sum2(x:number,y:number,z:number = 10):number{
    return x + y + z 
}

function sum3(x:number,y:number,...data:number[]):number{
    return x + y + data.reduce((p,q) => {return p  + q})
}


console.log(summ(3,4,5))
console.log(sum11(3,4))
console.log(sum2(3,4))
console.log(sum3(3,4,5,6,7,8,9,2,4,5,8,44,7,87))
