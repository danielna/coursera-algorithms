(function() {

    // Quicksort
    //
    // Pick a pivot item (move it to the first item), place items before and after it by swapping
    // Keep track of two indices as you traverse the array
    // This is a horrible description
    //
    // With random pivot selection, should be O(nlogn)
    // Worst case pivot selection (first item in an already sorted array) is O(n^2) -- very rare

    var array = [3,8,2,5,1,4,7,6];
    // var array = [3,5,2,1,4];

    var quickSort = function(array) {
        // first element pivot
        partition(array, 0, array.length);
        return array;
    };

    var partition = function(array, leftIndex, rightIndex) {

        // Adding this in so the recursion doesn't go farther than it needs to
        var hasSwapped = false;

        if (leftIndex < rightIndex) {
            var pivot = array[leftIndex],
                i = leftIndex + 1;

            for (var j = i; j < rightIndex; j++) {
                if (array[j] < pivot) {
                    // Swap
                    var temp = array[j];
                    array[j] = array[i];
                    array[i] = temp;
                    // console.log("swap - j:", array[j], " & i:", array[i]);
                    // console.log("post-swap array:", array);
                    i++;
                    hasSwapped = true;
                }
            }

            // Move pivot to its correct place
            array[leftIndex] = array[i-1];
            array[i-1] = pivot;

            // console.log("array:", array);
            if (hasSwapped) {
                partition(array, 0, i-1);
                partition(array, i, rightIndex);
            }
            
        } else {
            return array;
        }
    };

    var x = quickSort(array);
    console.log("quicksorted array:", x);

})();