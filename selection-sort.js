
function selectionSort(arr) {

  // Copy the original array
  let copyArr = arr.slice();
  // Create an array to store the sorted values
  let sorted = [];
  // While the array is not empty...
  while (copyArr.length) {
    // Do not move this console.log
    console.log(sorted.join(","));
    // Find the index of the minimum value in the unsorted half
    let minEl = Math.min(...copyArr)
    // Save and remove the value at the min index
    index = copyArr.indexOf(minEl);
    let removed = copyArr.splice(index, 1);
    // Add the min value to the end of the sorted array
    sorted.push(removed[0]);
  }
  console.log(sorted)
  return sorted;
}

let arr1 = [4, 6, 1, 5, 3, 5];
console.log(selectionSort(arr1));

//===================================================

function selectionSortInPlace(arr) {

  // Set a pointer at zero dividing the array into sorted and unsorted halves
      let divider = 0

  // Repeat while the unsorted half is not empty:
      while(divider < arr.length){

    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIndex = divider
          for(let i = divider + 1; i < arr.length; i++){
              if (arr[i] < arr[minIndex]){
                  minIndex = i
              }
          }

    // Save the min value                                 (it will either be arr[divider] or arr[i] from the above for loop)
    let minValue = arr[minIndex];

    // Shift every unsorted value to the left of the min value to the right by 1
       for (let i = minIndex; i > divider; i--) {
          arr[i] = arr[i-1]
       }

    // Put the min value at the divider
    arr[divider] =  minValue

    // Increment the divider and repeat
    divider++
      }
      return arr
}

let arr2 = [4, 6, 1, 5, 3, 5, 7, 8, 9, 2];
console.log(selectionSortInPlace(arr2));



module.exports = [selectionSort, selectionSortInPlace];
