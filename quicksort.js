(function() {

    // Quicksort
    //
    // Pick a pivot item (move it to the first item), place items before and after it by swapping
    // Keep track of two indices as you traverse the array
    // This is a horrible description
    //
    // With random pivot selection, should be O(nlogn)
    // Worst case pivot selection (first item in an already sorted array) is O(n^2) -- very rare

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

    var comparisions = 0;

    // var array = [3,8,2,5,1,4,7,6];

    var quickSort = function(array) {
        // first element pivot
        partition(array, 0, array.length);
        return array;
    };

    var partition = function(array, leftIndex, rightIndex) {

        // console.log("** RECURSE **");
        // console.log("leftIndex:", leftIndex);
        // console.log("rightIndex:", rightIndex);
        // console.log("array subsection:", array.slice(leftIndex, rightIndex));
        // console.log("************");

        if (leftIndex < rightIndex-1) {
            var pivot = array[leftIndex],
                i = leftIndex + 1;

            for (var j = i; j < rightIndex; j++) {
                if (array[j] < pivot) {
                    // Swap
                    var temp = array[j];
                    array[j] = array[i];
                    array[i] = temp;
                    // console.log("swap - j:", j, " + a[j]:", array[j], " & i:", i, " + a[i]:", array[i]);
                    // console.log("post-swap array:", array);
                    i++;
                }
            }

            // Move pivot to its correct place
            array[leftIndex] = array[i-1];
            array[i-1] = pivot;

            // console.log("array end:", array.slice(leftIndex, rightIndex));

            partition(array, leftIndex, i);
            partition(array, i, rightIndex);
            
        } else {
            // console.log("return: ", array.slice(leftIndex, rightIndex), "\n");
            return array.slice(leftIndex, rightIndex);
        }
    };

    var sorted = quickSort(array);
    console.log("quicksorted array:", sorted);

})();