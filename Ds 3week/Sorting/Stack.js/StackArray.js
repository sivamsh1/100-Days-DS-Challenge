// push pop peek  isempty size Print

class Stack{
constructor(){
    this.items = []
}


push(value){
    this.items.push(value)
}
pop(){
   this.items.pop() 
}
peek(){
    return this.items[this.items.length-1]
}

isEmpty(){
    return this.items.length === 0
}
size(){
    return this.items.length
}
print(){
    console.log(this.items.toString());
}

}


let stack = new Stack()
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.pop();
console.log(stack.isEmpty());

stack.print();