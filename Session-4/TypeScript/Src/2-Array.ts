// Implicit Array

let arr1 = [1,2,3,4]
arr1.push(5)
arr1.push(10)
console.log(arr1)


// Explicit Array

let arr2:string[] = [];
// arr2 = ["Rajkamal","Kishor","Gupta"]
arr2.push("RAJ")
console.log(arr2)

let arr3:string[];
arr3 = ["a",'b','c']


//Mixed Array

let arr4:(string|number)[];
arr4 = [1,2,3,"Rajkamal",'Raj','b']
console.log(arr4)