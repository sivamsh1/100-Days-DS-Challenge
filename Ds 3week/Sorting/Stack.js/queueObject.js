


class Queue{
    constructor(){
        this.item = {}
        this.front = 0;
        this.rear = 0;
    }



    enqueue(value){
        this.item[this.rear] = value
    this.rear++
    }


    dequeue(){
        let item = this.item[this.front]
        delete this.item[this.front]
        this.front++
    }

    print(){
        console.log(this.item);
    }

    peek(){
       return this.item[this.front]
    }

    size(){
        return this.rear - this.front
    }

}





let queue = new Queue

queue.enqueue(6);
queue.enqueue(5);
queue.enqueue(5);
queue.enqueue(5);
queue.enqueue(5);

console.log(queue.size());
console.log(queue.peek());
queue.print()  