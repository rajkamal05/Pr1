function sum(...x)
{
    console.log(x)
    // return x + y
}


//Rest Parameter: Pack the Element into array

// console.log(sum(2,3,4,5,6,7,8,9))
sum(2,3,4,5,1,2,3,5,6,7,1,9)
sum(6,3,"Rajkamal",{nm:20},[3,4,5,6],67,4,'y',7,8,0)


function sum1(p,q,...x)
{
    console.log(x)
    return p + q
}


//Rest Parameter: Pack the Element into array

// console.log(sum(2,3,4,5,6,7,8,9))
sum(2,3,4,5,1,2,3,5,6,7,1,9)
sum(6,3,"Rajkamal",{nm:20},[3,4,5,6],67,4,'y',7,8,0)


console.log(sum1(6,3,"Rajkamal",{nm:20},[3,4,5,6],67,4,'y',7,8,0))