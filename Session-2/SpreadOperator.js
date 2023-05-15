const fr = [1,2,3]
const sn = [4,5,6]

const comb = fr.concat(sn)

console.log(comb)


console.log(fr)
console.log(...fr)
console.log(sn)

const comb1 = [...fr,'A',...sn]

console.log(comb1)