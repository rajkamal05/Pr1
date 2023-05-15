console.log("first Statment")
console.log("Second Statment")

setTimeout(() =>{
var result = 0
for(var i = 0;i<5000000000;i++)
{
    result = result + i
}
console.log(result)
},
);


console.log("Third Statment")


var x = setInterval(function(){
    console.log("Hello")
},3000)

setInterval(function(){
    console.log("Bye")
},2000)

clearInterval(x)

