
// function selectionSort(arr) {

//     // Copy the original array
//     let copy = arr.slice()
//     // Create an array to store the sorted values
//     let sorted = []
//     // While the array is not empty...
//     while(copy.length) {
//       // Do not move this console.log
//       console.log(sorted.join(","));
//       // Find the index of the minimum value in the unsorted half
//       let min = Math.min(...copy)
//       // Save and remove the value at the min index
//          idx = copy.indexOf[min]
//         let removed = copy.splice(idx, 1)
//       // Add the min value to the end of the sorted array
//       sorted.push(...removed)
//     }
//     return sorted
//   }

  function selectionSort(arr){
    let copy = arr.slice()
    let sorted = []

    while(copy.length) {
        let min = Math.min(...copy)
        let idx = copy.indexOf(min)
        let removed = copy.splice(idx, 1)
        sorted.push(...removed)
    }
    return sorted
  }

let arr1 = [4, 6, 1, 5, 3, 5];
console.log(selectionSort(arr1));
