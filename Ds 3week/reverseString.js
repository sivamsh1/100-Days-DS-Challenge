

let rev = (A)=>{
    let val = " ";
    for( let i=A.length-1;i>=0;i--){
        
    val += `${A[i]}`
 
    }


    return val;
}

let A = `Myname`


console.log(rev(A));