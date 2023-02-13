

let  array = [1,2,3,6,8,-20,-10,50,-15]


let selectionSort=(array)=>{


    for(i=0;i<array.length;i++){
        

  let    smallestIndex = i;

        for(j=i+1;j<array.length;j++){

            if(array[smallestIndex]>array[j]){
                smallestIndex = j;
            }

        }
    
    if(smallestIndex != i){
        let temp  = array[smallestIndex]
        array[smallestIndex] = array[i]
        array[i] = temp
    }

}
return array;

}





console.log(selectionSort(array));
