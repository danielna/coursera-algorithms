(function() {

    // Quicksort
    //
    // Pick a pivot item (move it to the first item), place items before and after it by swapping
    // Keep track of two indices as you traverse the array
    // This is a horrible description
    //
    // With random pivot selection, should be O(nlogn)
    // Worst case pivot selection (first item in an already sorted array) is O(n^2) -- very rare

    // 162085 using first as pivot
    // 164123 using last as pivot
    // 138382 using median of 3 as pivot    

    // Load the contents of PS1.txt
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/input/QuickSort.txt', false);
    xhr.send(null);

    // Convert the STRINGS to INTEGERS
    var arrayString = xhr.responseText.split('\n');
    var array = [];
    for(var x in arrayString) {
        array.push(parseInt(arrayString[x], 10));
    }

    var PROBLEM_NUMBER = 3;
    var comparisons = 0;

    // var array = [3,8,2,5,1,4,7,6];

    var quickSort = function(array) {
        // first element pivot

        console.log("array:", array);
        partition(array, 0, array.length);
        return array;
    };

    var partition = function(array, leftIndex, rightIndex) {
        
        if (leftIndex < rightIndex-1) {
            comparisons += (rightIndex - 1) - leftIndex;

            var pivot = getPivot(array, leftIndex, rightIndex, PROBLEM_NUMBER),
                i = leftIndex + 1;

            for (var j = i; j < rightIndex; j++) {
                if (array[j] < pivot) {
                    // Swap
                    var temp = array[j];
                    array[j] = array[i];
                    array[i] = temp;
                    i++;
                }
            }

            // Move pivot to its correct place
            array[leftIndex] = array[i-1];
            array[i-1] = pivot;

            partition(array, leftIndex, i-1);
            partition(array, i, rightIndex);
            
        } else {
            if (leftIndex === rightIndex) {
                return array[leftIndex];
            }

            return array.slice(leftIndex, rightIndex);
        }
    };

    var getPivot = function(array, leftIndex, rightIndex, problemNumber){
        if (problemNumber === 2){
            swap(array, leftIndex, rightIndex);
        }
        if (problemNumber === 3){
            var midIndex = Math.floor((rightIndex-1 - leftIndex)/2) + leftIndex,
                mid = array[midIndex],
                left = array[leftIndex],
                right = array[rightIndex-1];

            // mid is middle
            if ((mid > right && mid < left) || (mid < right && mid > left)) {
                swap(array, leftIndex, midIndex + 1);
            // right is middle
            } else if ((right > mid && right < left) || (right < mid && right > left)) {
                swap(array, leftIndex, rightIndex);
            }
        }

        return array[leftIndex];
    };

    var swap = function(array, pos1, pos2){
        var _temp = array[pos1];
        array[pos1] = array[pos2-1];
        array[pos2-1] = _temp;
    };

    var sorted = quickSort(array);
    console.log("quicksorted array:", sorted);
    console.log("comparisons:", comparisons);

})();