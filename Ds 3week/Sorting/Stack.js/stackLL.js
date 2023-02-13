// Push,pop,peek,isEmpty,getsize,print 


class Node{
    constructor(value){

        this.value = value;
        this.next = null;

    }
}

class linkedList{

constructor(){
    this.size=0;
    this.head=null;
    this.tail=null;
}

isEmpty(){
    return this.size===0;
}

push(value){
    let node = new Node(value)
    if(this.isEmpty()){

    this.head = node;
    this.tail = node;
    }else{

        node.next = this.head;
        this.head = node;
    }
    this.size++;
}


print(){
    if(this.isEmpty()){
        return -1
    }else{

      let val = ""

      let curr = this.head;
      while(curr){
    
         val += `${curr.value} `
         curr = curr.next;

        
      }
      console.log(val);


    }
}
pop(){
    if(this.isEmpty()){
        return - 1
    }else{
        this.head = this.head.next;
    }
}
peek(){
    return this.head.value;
}

getSize(){
    return this.size;
}

}





let list = new linkedList

list.push(2)
list.push(2)
list.push(2)
list.push(8);
console.log(list.peek());
console.log(list.getSize());


// list.print()