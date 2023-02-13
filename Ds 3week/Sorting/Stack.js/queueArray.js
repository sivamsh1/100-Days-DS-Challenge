class Queue{
    constructor(){
        this.items = []
    }

enqueue(value){
    this.items.push(value)

}

dequeue(){
    this.items.shift()
}

peek(){
    return this.items[0]
}

isEmpty(){
    return this.items.length===0;
}

print(){
    console.log(this.items.toString());
}

}




let queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)


queue.print()

queue.dequeue()
queue.print()

