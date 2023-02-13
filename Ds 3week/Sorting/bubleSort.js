//Buble Soart




let array = [1, 4, -2,5,-8,6,-100]

let bubleSort = (array) => {

    let temp;
    let swap=false;

    while (swap === false) {
        swap = true;

        for (i = 0; i < (array.length)- 1; i++) {
            

            if(array[i] > array[i + 1]) {

                temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp;
                swap = false;
            }

        }
    }
    console.log(array);
}



console.log(bubleSort(array));