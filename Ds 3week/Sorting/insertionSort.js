
let array = [-2,3,4,8,10,-30,35]



 let insertionSort = (array)=>{


    for (let i = 1; i < array.length; i++) {
    
        let j = i - 1;
        let currentElement = array[i];
        while (j >= 0 && currentElement  < array[j])
        {

             array[j+1] = array[j];
             j = j - 1;

        }
        array[j + 1] = currentElement;
    }
    return array;

 }

console.log(insertionSort(array));



