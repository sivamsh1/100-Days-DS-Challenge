class Node{
    constructor (value){
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


arryatoLinkedList(array){
    
    array.forEach(element => {
    this.insert(element)
    });

    
}

insert(val){
 
    console.log(val);
    let node = new Node(val)

    if(this.size ===0){
    this.head = node;
    this.tail = node;
    
    }else{
        let curr = this.tail;
   curr.next = node;
   this.tail = node;

    }
    this.size++


}

print(){
    if(this.size ===0 ){
        console.log("Empty linked list");
    }else{
        let curr = this.head;
        let val = " "
        while(curr){
           val += `${curr.value} `
        }
        console.log(val);
    }
}


deleteDuplicate(){

    let curr = this.head;

    let set = new Set()
    while(curr){
        const nodemon = require("nodemon");
if(set.has(curr.value) ){
    
}
 set.add(curr.value)


    }

}

}



let list = new linkedList()
let A = [1,2,2,4,4,6]
list.arryatoLinkedList(A)
list.print();




