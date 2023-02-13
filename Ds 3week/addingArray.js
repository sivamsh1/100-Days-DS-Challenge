


fn = (A)=>{
    let length= A.length ;
    for(i=0;i<3 ;i++){

A[length+i] = B[i];
console.log(A[length+i],B[i]);   
        
    }
    return A ;

}

let B = [1,2,3]


let A = [1,2,3] 

console.log(fn(A));