

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
           console.log(Total % this.size );
           console.log(Total );
return Total % this.size;
    }

    Set(key,value){
        let index = this.hash(key);
        let bucket = this.table[index]
        if(!this.table.index){
            this.table.index = [[key,value]]
        }else{
         let   existKey = this.table.index.find(item=> item[0]===key)
            if(existKey){
                existKey[1] = value
            }else{
                
                bucket.push([key,value])
            }

        }

    }

get(key){
        let index = this.hash(key)
        let bucket = this.table[index]

        if(bucket){
           let existElement = bucket.find(item=> item[0]===key)
           if(existElement){
            return existElement[1]
           }
        }
    
    }
    remove(key){
        let index = this.hash(index);
        let bucket = this.table[index]
        if(bucket){
            let existElement = bucket.find(item => item[0]===key)
            if(existElement){
                bucket.splice(bucket.indexOf(existElement,1))
            }
        }

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
// table.Set("Ind","india");
// table.Set("Ind","india");
// table.Set("Ind","india");
// table.Set("Ind","india");
table.hash("dfghjk")

console.log(table);
table.display()