const e = require("express");

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


arrayTolist(Ar) {
Ar.forEach(element => {
   this.insert(element)
});

}

insert(value){

    let node  = new Node(value)

    if(this.isEmpty()){
        this.head = node
        this.tail = node

    }else{
this.tail.next = node;
this.tail = node;
    }
    this.size++;

}

}


let list = new linkedList();

let A = [1,4,6,7,8,9]

list.arrayTolist(A)
list.print()









