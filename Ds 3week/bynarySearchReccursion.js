






 let  bynaryReccuersion = (A,target,start,end)=>{


    if(start>end){
        return -1;
    }
    let mid = Math.floor((start+end)/2)
    if (A[mid]==target){
        return mid;
    }else if(target<A[mid]){
        let end = mid - 1
        return bynaryReccuersion(A,target,start,end)
    }else if(target>A[mid]){
        let start = mid+1
        return bynaryReccuersion(A,target,start,end)
    }

 }



 
let A = [1,2,3,5,6,7,8]

let start = 0;
let end = A.length-1;
let target = 7;

console.log( bynaryReccuersion(A,target,start,end));