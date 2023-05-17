export class Employee{
    // Properties
    // Public data by Default
    private empID:number
    protected empName:string
    // Constructor
    constructor(id:number,name:string){
        this.empID = id
        this.empName = name
    }

    // Function


    details():void{
        console.log(`Employee Id: ${this.empID} \nEmployee Name: ${this.empName}`)
    }
}

let emp1 = new Employee(123,"Rajkamal")
let emp2 = new Employee(456,"Kishor")

emp1.details()
emp2.details()

// emp2.empName = "Gupta"
emp2.details()


let empp:Employee[] = [];
empp.push(emp1)
empp.push(emp2)
console.log(empp)

console.log(5+7)

// we can use abstract class concept also
