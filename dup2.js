
function selectionSortInPlace(arr) {

    // Set a pointer at zero dividing the array into sorted and unsorted halves
        let divider = 0
    // Repeat while the unsorted part is not empty:
        while(divider < arr.length) {
      // Do not move this console.log
      console.log(arr.join(","));
      // Find the index of the minimum value in the unsorted half (to the right of the pointer)
      let minIndex = divider
          for(let i = divider + 1; i < arr.lengt; i++) {
            if(arr[i] < arr[minIndex]) {
              minIndex = i
            }
          }

      // Shift every unsorted value to the left of the min value to the right by 1
          for(let i = minIndex; i > divider; i-- ){
            arr[i] = arr[i-1]
          }
      // Put the min value at the divider
           arr[divider] = minvLUE
      // Increment the divider and repeat
        divider++
        }
        return arr

  }

  let arr1 = [4, 6, 1, 5, 3, 5];
console.log(selectionSortInPlace(arr1));
