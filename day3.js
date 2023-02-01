// 1- Task is to store a decimal's bynary into linked list
// 2 convert bynary linked list into decimal; 




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


// <--------------------Start of Decimal To Bynary ------------------------>

decimlToBynary(num){
    let arr = [];
    for(let i=num;i>=1;i = Math.floor(i/2)){
        let rem = i%2;
        arr.unshift(rem);

    }
    arr.forEach(ele => {
        this.upload(ele)
        
    })

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
    this.size++

}

// <--------------------End of Decimal To Bynary ------------------------>
//<---------------------StartBynaryTodecimal----------------------------->

bynaryToDecimal(){

let power = this.size - 1
let curr = this.head;
let A = 0;
while(curr){
    
    A += curr.value * Math.pow(2,power)
 curr = curr.next
 power--

}

console.log(A);


}
//<---------------------End of BynaryTodecimal----------------------------->


}

// decimal to bynary

let list = new linkedList();

list.decimlToBynary(8);
list.print()

//bynaryToDecimal

list.bynaryToDecimal();


