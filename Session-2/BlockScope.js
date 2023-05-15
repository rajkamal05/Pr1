for(let i=0;i<10;i++)
{
    console.log(i)
}

console.log("Outside Block")
// console.log(i)

function variable()
{
    let x = 10
    console.log(x)
    if(true)
    {
        let x = 15
        console.log(x)
    }
    console.log(x)
}

variable()

const y = 20
// y = 30
console.log(y)

const arr = [2,4,5,6]
arr.push(8)
console.log(arr)
arr[0]  = 7
console.log(arr)

const age = Object.freeze([10,20,30])
// age.push(60)

console.log(age)
age[2] = 40
console.log(age)