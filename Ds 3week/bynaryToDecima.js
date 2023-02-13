
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

bynaryToDecimal(){

    let power = 0;
    let curr = this.head
    let totalsize =  this.size - 1;
    let total = 0;
    while(curr){
        
  total  = total+ curr.value * Math.pow(2,totalsize)
  curr = curr.next;
  totalsize --; 

    }
console.log(total);
}



}


let list = new linkedList;


list.append(1);
list.append(0);
list.append(0);
list.append(0);

list.bynaryToDecimal()
