

let array = [1,3,5,7,-30,-50,-100,25]

let mergeSort = (array)=>{

    if(array.length<2){
        return array
    }

    let mid = Math.floor(array.length/2)

    let leftArray = array.slice(0,mid)
    let rightArray = array.slice(mid)

return function2(mergeSort(leftArray),mergeSort(rightArray))

}


let function2 = (leftArray,rightArray)=>{

   let sortedArray = [];

while(leftArray.length && rightArray.length){

    if(leftArray[0]<rightArray[0]){
        sortedArray.push(leftArray.shift())
    }else{
        sortedArray.push(rightArray.shift())
    }
}
return [...sortedArray,...leftArray,...rightArray]


}


console.log(mergeSort(array));






