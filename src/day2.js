// Task reverse a linked list and Convert Array  into linked list


//1) converting Array into LL




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


arrayToBynary(Arr){
Arr.forEach(elem => {
     this.upload(elem)
})
}

upload(elem){
    let node = new Node(elem)

    if(this.isEmpty()){
        this.head = node;
        this.tail = node
    }else{
        this.tail.next =node;
        this.tail = node;
    }
    this.size++;

}


revers(){
let prev = null;
let curr = this.head

while(curr){
 let nextTemp = curr.next;
curr.next = prev;
prev = curr;
 curr=nextTemp;
}

this.head = prev;


}

}





// converting array into linked list

let list = new linkedList()
list.append(2);
list.append(5);
list.append(6);
list.append(8);
list.print();


//reversing linked list

list.revers()
list.print()