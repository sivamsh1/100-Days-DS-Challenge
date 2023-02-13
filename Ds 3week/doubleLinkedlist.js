class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
        this.prev = null;

    }

}


class linkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }



    print() {
        if (this.isEmpty()) {

            console.log("linked list is Empty");
        } else {
            let curr = this.head;
            let val = " "

            while (curr) {

                val += `${curr.value} `

                curr = curr.next
            }
            console.log(val);



        }
    }


append(val){


    let node = new Node(val)

    if(this.isEmpty()){
        this.head = node;
        this.tail = node;
        this.prev = null
    }else{
    
            node.prev = this.tail;
           this.tail.next = node
            this.tail =  node;
    
    }
    this.size++;

}




}




                       
let list  = new linkedList()

list.append(2);
list.append(2);
list.append(2);
list.append(2);

console.log(list);

list.print();