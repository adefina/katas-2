//KATA 01

function add (x , y=0) {
    return x + y
}
console.log(add(2,4))

//KATA 02

function multiply (x , z) {
    // let result = []
    // for (let i=0; i < z-1; i++){ 
    //     result +=
    // }
    let total= (x)
    for (let i = 0; i < z-1; i ++){
        total = add(x, total)
    }
    return total
    
}
console.log(multiply (6,4))

//KATA 03

function power (x , n) { 
    let total = (x)
    for (let i=0; i<n-1; i++){
        total =multiply(x,total)
    }
    return total
}
console.log(power(2,8))
console.log(power(3,4))

//KATA 04
 function factorial (x) { 
     let total = x
     for (let i= 2; i<=x-1; i++){
         total = multiply(i,x)
     }
     return total 
 }
 console.log(factorial(5))
 console.log(factorial(4))
 console.log(factorial(1))

 //KATA 05

function nacci(n){
    let sequence = [0, 1];
    for (let i = 2; i < n+1; i++){
      sequence.push(add(sequence[i - 2],sequence[i -1]))
    }
   return sequence[n]
}
 console.log(nacci(3))
 console.log(nacci(5))
 console.log(nacci(8))
 console.log(nacci(16))
