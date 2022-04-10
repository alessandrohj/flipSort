/**
 * @param {number[]} arr
 * @return {number[]}
 */

 var flipSort = function(arr) {
    let flip = (arr, k) => {
        for (let i = 0; i < Math.floor(k / 2); i++) {
            [arr[i], arr[k - 1 - i]] = [arr[k - 1 - i], arr[i]];
        }
        return arr;
     }
    
    let size = arr.length;
    let newArr = [];
    while (size > 0) {
        let counter = arr.indexOf(size);
        if (counter === size - 1) {
            arr.pop();
            size--;
        } else if (counter >= size/2 || counter === 0) {
            newArr.push(size);
            arr = arr.reverse();
        } else {
            newArr.push(counter+1);
            arr = flip(arr, counter+1);
        }
    }
    
    return newArr;

 }