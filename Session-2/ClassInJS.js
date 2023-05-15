

//ES 5  Class Notation

function Emp(name,age,sal){
    this.name = name
    this.age = age
    this.sal = sal
    disp = function(){
        console.log(this.name,this.age,this.sal)
    }
}

//ES 6  Class Notation

class Emp1 {
    constructor(name, age, sal) {
        this.name = name
        this.age = age
        this.sal = sal
    }
    disp() {
        console.log(`name: ${this.name} \nAge:${this.age}\nSal:${this.sal} `)
    
    }
}

let obj1 = new Emp1("Rajkamal",30,1000)
obj1.disp()


class Std extends Emp1{
    constructor(name,age,sal,rl){
        super(name,age,sal)
        this.rl = rl

    }
    Details(){
        // console.log(`name: ${this.name} \nAge:${this.age}\nSal:${this.sal} \nRoll ${this.rl}`)
        super.disp()
        console.log(`\nRoll ${this.rl}`)
    }
}

let obj2 = new Std("Rajkamal",20,12000,212) 
obj2.Details()