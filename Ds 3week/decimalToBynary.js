const { timeStamp } = require("console");

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



decimalToBynary(val){
    
  let arr = []
    for( let i=val;i>=1; i = Math.floor(i/2)){
        let mode = i%2
        arr.unshift(mode)
      
    }
   arr.forEach(ele => {

this.upload(ele)
    
    });
    
}

upload(ele){
    let node =  new Node(ele)
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


let list = new linkedList;



list.decimalToBynary(8);
list.print()
