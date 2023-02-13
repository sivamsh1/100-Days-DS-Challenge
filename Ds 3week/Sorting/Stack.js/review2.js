class Node{
    constructor(value){
        this.value = value;
        this.next  = null;
    }
}


class linkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size===0
    }


    display(){
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.next
        }
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
        this.size++  

    }

    pop(){

        let temp = this.head.value;
        this.head = this.head.next;
        return temp;   
        
    }

    

}


let list = new linkedList()

list.push(20);
list.push(20);
list.push(20);
list.push(24);
list.push(24);
list.push(23);



console.log(list.pop());

list.display()