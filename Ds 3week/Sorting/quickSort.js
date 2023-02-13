

let array = [-2,4,5,-10,100,-50]


let quickSort = (array)=>{
    if(array.length <2){
        return array;

    }


    let arrayLeft = [];
    let arrayRight = [];
    let  element = array[array.length-1]


    for(let i =0;i<array.length-1;i++){

        if(array[i]<element){
            arrayLeft.push(array[i])
        }else{
            arrayRight.push(array[i])
        }

    }



    return [...quickSort(arrayLeft),element,...quickSort(arrayRight)]


}


console.log(quickSort(array));