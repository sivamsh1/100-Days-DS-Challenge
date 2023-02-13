

let array = [1,3,6,-8,35,-100,200]


 
let  mergeSort = (array)=>{
    if(array.length<=1){
        return array
    }

let mid = Math.floor(array.length/2) 


let arrayLeft = array.slice(0,mid)
let arrayRight = array.slice(mid)

return function2(mergeSort(arrayLeft),mergeSort(arrayRight))

}

let function2 = (arrayLeft,arrayRight)=>{
let sortedArray = [];


console.log(arrayLeft );
// console.log("------------------------------------------------------")
// console.log(arrayRight );
// console.log("------------------------------------------------------")


    while(arrayLeft.length && arrayRight.length){
        if(arrayLeft[0]<=arrayRight[0]){
            sortedArray.push(arrayLeft.shift())
        }else{
            sortedArray.push(arrayRight.shift())
        }
    }
    return [...sortedArray, ...arrayLeft, ...arrayRight]

}



console.log(mergeSort(array));