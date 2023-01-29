// Todays Task
// 1) TWo sum of array
// 2) Create linked list append ,print


//1) Two Sum Array

let twoSum =(Array,target)=>{

let obj = {}
for(i=0;i<Array.length;i++){

let minusVal = target-Array[i];


if(obj[minusVal]){
    return [ obj[minusVal], Array[i] ] 
}else{
    obj[Array[i]] = Array[i] ; 
}

} 
}


let A = [1,2,5,10,6,8];
let target = 16;

console.log(twoSum(A,target));





// 2) Create linked list append ,print


class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
        
    }
}


class linkedList{
    constructor(){
       this.head = null;
       this.tail = null;
       this.size = 0;

    }



isEmpty(){
    return this.size==0 ;
}

append(value){
let node = new Node(value);
if(this.isEmpty()){
this.head = node;
this.tail = node;
}else{
this.tail.next = node;
this.tail = node;
}
this.size++
}

print(){

    let curr = this.head;
    let val = " "
    while(curr){
   
     val+= ` ${curr.value} `
     curr = curr.next

    }
    console.log(val);
}



}



let list = new linkedList()
list.append(2);
list.append(2);
list.append(2);
list.append(2);
list.print()