

let array = [1,2,3,-10,-20,-30]


let insertionSort = (array)=>{

for (let i = 1;i < array.length; i++) {
    
    let currentElement = array[i];
    let j = i - 1;

    while (i>=0 && currentElement<array[j]) {

        array[j+1] = array[j]
        j = j-1;
    }
    array[j+1]  = currentElement;
    
}
return array;


}


console.log(insertionSort(array));