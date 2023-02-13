
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
}


let list = new linkedList;


list.append(1);
list.append(2);
list.append(1);
list.append(2);
list.append(1);

list.removeDuplicates()

list.print()


