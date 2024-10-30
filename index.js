function same(arr1, arr2) {
  // if arrays are not same length then return false
  if (arr1.length !== arr2.length) return false;
  // loop through first array
  for (let i = 0; i < arr1.length; i++) {
    // find the correct index in array 2 that is the square of the index in array 1
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    // if not found return false
    if (correctIndex == -1) return false;
    // if found then remove that number from array 2
    arr2.splice(correctIndex, 1);
  }
  return true
}

console.log(same([1,2,3,2], [4,1,4,9]))
console.log(same([1, 2, 3, 2, 3], [4, 1, 4, 9]))
console.log(same([1,2,3,2], [4,1,4,10]))

