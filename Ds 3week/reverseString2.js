


let fn = (A)=>{
let val = " ";

let size = A.length

    for(i=size-1;i>=0;i--){


         val += A[i]

    }
   return val;
}

let A  = "mynameIsSivamsh"

console.log(fn(A));