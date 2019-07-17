function bubbleSort(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      let first = arr[j];
      let second = arr[j + 1];
      if (first > second) {
        arr[j] = second;
        arr[j + 1] = first;
      } else {
        i++;
      }
    }
  }
  //   return arr.sort();
}
