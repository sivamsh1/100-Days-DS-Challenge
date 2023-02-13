let A = [1,2,3,4,5]


fn = (A,num)=>{

let b = [num]
let length = b.length;
    for(let i=0;i<A.length;i++){
 

 b[length+i] = A[i];       


    }
    console.log(b);



}



console.log(fn(A,0));




let adding = (A)=>{

    for(i=0;i<=2;i++){

        if(A[i]==2){
            A.push(8)
        }
    }
    console.log(A);

}




console.log(adding(A));





var As = {name:"sivamsh"}

let Bs = {...As}


Bs.name = "Anjana"


console.log(As,Bs);






let a = 10;

a= 20
console.log(a);




