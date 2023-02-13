//enqueue dequeue peek size isEmpty print




class Queue{
    constructor(){
        this.item = {}
        this.front = 0
        this.rear = 0
    }


    enqueue(value){
        this.item[this.rear] = value
        this.rear++
    }

    dequeue(){
        delete this.item[this.front]
        this.front++
    }
    peek(){
        return this.item[this.front]
    }
    size(){
        return this.rear - this.front 
    }

    isEmpty(){
       return this.rear - this.front === 0;
    }

    print(){
        console.log(this.item);

    }

}



let queue = new Queue()
queue.enqueue(20);
queue.enqueue(29);
queue.enqueue(29);
queue.enqueue(29);
queue.enqueue(29);
queue.enqueue(29);

queue.dequeue()


// console.log(queue.size());
console.log(queue.isEmpty());

// queue.print()