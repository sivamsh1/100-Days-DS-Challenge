let A = [1,2,3,4,5,6,7]


let bSearch = (A,target)=>{

let start = 0;
let end = A.length - 1

while(start<=end){
    let mid=Math.floor((start+end)/2) 

    if(target < A[mid]){
        end = mid-1
    }else if(target>A[mid]){
        start = mid+1
    }else{
        return mid;
    }
}
}



console.log(bSearch(A,7));