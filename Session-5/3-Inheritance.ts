import { Employee } from "./2-ClassObject"  

class Department extends Employee{
    Did: number
    // Constructor
    constructor(id:number,name:string,Didd:number){
        super(id,name)
        this.Did = Didd
    }
    show(){
        super.details()
        console.log(`Department id: ${this.Did}`)
    }
}

let d1 = new Department(123,"CSE",456)
d1.show()

