




let array = [1, 2, -4, 5, 3, -10, 20];

let bubleSort = (array) => {
  let swap = false;
  let temp;

  while (swap === false) {
    swap = true;

    for (i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;

        swap = false;
      }
    }
  }

  return array;
};

console.log(bubleSort(array));
