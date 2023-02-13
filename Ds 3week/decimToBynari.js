class Node{
    constructor(value){
        this.value=value;
        this.next = null;
            
}
}


class linkedList {
    constructor(){
        this.head = null ;
        this.tail = null;
        this.size = 0;
    }

isEmpty(){
    return this.size === 0;
}

print(){
    if(this.isEmpty()){
        return "Empty linkd list"
    }
    
    let curr  = this.head;
    let val = " "
    
    while(curr){
        val += `${curr.value} `
        curr = curr.next; 
        
    }
    console.log(val);       
}

append(value){

    let node = new Node(value)
    if(this.isEmpty()){
        this.head = node;
        this.tail = node;
    }else{           
       this.tail.next = node;
        this.tail = node;
    }
    this.size++
}



removeDuplicates(){
let curr = this.head;
let set = new Set()
set.add(curr.value)
while(curr.next){

    if(set.has(curr.next.value) ){
        curr.next = curr.next.next;

    }else{
        curr = curr.next;   
        set.add(curr.value) 
    }

}
}

reverseList(){

    let curr= this.head;
    let prev = null;
    while(curr){
        let n = curr.next
curr.next = prev;
prev = curr;
curr = n;
     }
     prev = this.head

}
decimToBynari(val){

    let arr = []
    for(let i=val;i>=1;i =  Math.floor(i/2)){

    let  rem = i%2

   arr.unshift(rem)

    }
    arr.forEach(ele => {
        this.upload(ele)
        
    });

}

upload(ele){
    let node = new Node(ele)
    if(this.isEmpty()){
this.head = node;
this.tail = node;
    }else{
        this.tail.next = node;
        this.tail = node;
    }
    this.size++;
}





}

let list = new linkedList()

list.decimToBynari(16)
list.print();


fibReccursion=(num)=>{

    if(num<=1){
        return num; 
    }else{
       return fibReccursion(num-1)*fibReccursion(num-2)
    }

}

console.log(fibReccursion(5));


let fff = [1,2,3,4,5]

let m = fff;
m[0] = 20000;

console.log(fff,m);






bynarySearch = (A,target,start,end)=>{



   if(start>end){
    return -1
   }
   let mid = Math.floor((start+end)/2)
   if(target>A[mid]){

    start = mid+1
    return bynarySearch(A,target,start,end)
                
   }else if(target < A[mid]){
    end = mid - 1
    return bynarySearch(A,target,start,end)
   }else if(target == A[mid]){
    return mid;
   }
    
}

let A = [1,2,3,4,5,6,7]

let start = 0;
let end = A.length - 1;

console.log(bynarySearch(A,3,start,end));