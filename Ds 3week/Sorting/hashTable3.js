class HashTable{
    constructor(size){
        this. table = new Array(size)    // imp
        this.size = size;
        
    }

hash(key){
let Total = 0;
for(let i=0;i<key.length;i++){
    Total += key.charCodeAt(i);
}
return Total;

}


 set(key,value){
  let index = this.hash(key)
  this.table[index] = value
     }

get(key){
    let index = this.hash(key)
    return this.table[index]
}


display(){
    for(let i=0;i<this.table.length;i++){        //imp
        if(this.table[i]){
            console.log(this.table[i]);
        }
    }
}


remove(key){
    let index = this.hash(key)
    this.table[index] = undefined;

}


}

let table = new HashTable(50);
table.set("ind","a")
table.set("i","dia")
table.set("in","i")
table.set("d","in")
table.remove("d")

table.display()