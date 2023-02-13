// Hash get set remove display


class HashTable {
    constructor(size){
       this.table = new Array(size)
        this.size = size

    }


hash(key){
     let Total = 0;

      for (let i=0;i<key.length ;i++){
       Total += key.charCodeAt(i)
           }
return Total % this.size
    }

    get(key){
        let index = this.hash(key)
        console.log(index);
     return    this.table[index] 
    
    }

    Set(key,value){
        let index = this.hash(key);
        console.log(index);
        this.table[index] = value

    }

    display(){
        for(let i=0;i<this.size;i++){
            if(this.table[i]){
                console.log(this.table[i]);
            }
        }
    }

}



let table = new HashTable(50);
table.Set("Ind","india");
table.display()