var odd = [1,3,5,7,9]
let x1 = odd[0]
let x2 = odd[1]
let x3 = odd[2]
let x4 = odd[3]
let x5 = odd[4]


//Destructuring of Array

let [a,b,c,d,e] = odd


//for selective Destructuring

let[p,q,,,] =odd

let person = {
    name: "Rajkamal",
    Country: "India",
    age: 30
}

//Destructuring Object
let {name,Country,age} = person

console.log(name)
console.log(Country)
console.log(age)

// let [nm,Cn,ag] = person

// console.log(nm)
// console.log(Cn)
// console.log(ag)



var name1 = "Rajkamal"
var dr = 10
var vr = 10

let DataObj = {name1,dr,vr}

console.log(DataObj)