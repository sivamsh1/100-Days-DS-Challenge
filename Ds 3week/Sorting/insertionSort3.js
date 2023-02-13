


// let array = [1,2,7,8,-2,-50,70]



// let bubleSort = (array)=>{


//     let swapped = false;
//     let temp;
//     while(swapped === false){
//         swapped = true;


//         for(let i=0;i<array.length;i++){

//             if(array[i]>array[i+1]){

//                 temp = array[i+1]
//                 array[i+1] = array[i]
//                 array[i] = temp

//            swapped = false;

//             }

//         }
//     }


// return array

// }


// console.log(bubleSort(array));



 let array = [70,8,-2,-50,-70]


 let insertionSort = (array)=>{

let j;
let currentElement;

for(i=1;i<array.length;i++){

    j = i-1
    currentElement = array[i]

    while(i>=0 &&  currentElement<array[j] ){
        array[j+1] = array[j]
        j--;
    }
    array[j+1] = currentElement;

}
return array

 }



 console.log(insertionSort(array));