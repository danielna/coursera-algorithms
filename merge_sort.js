(function() {

    // merge sort
    // runs in nlog(n)

    // 1. Halve recursively, base case 1 element
    // 2. As you pop the stack, merge elements.

    var array = [10, 12, 425, 23, 1, 28, -24, 292, 586, 5, 7, 2, 8, 9, 14, -22, 1, 0];

    var mergeSort = function(array){
        var length = array.length;

        // base case
        if (length === 1) {
            return array;
        }
        var arraySplit1 = array.slice(0, length/2),
            arraySplit2 = array.slice(length/2, array.length),
            sortedArray1 = mergeSort(arraySplit1),
            sortedArray2 = mergeSort(arraySplit2);

        mergedArray = mergeArrays(sortedArray1, sortedArray2, length);
        return mergedArray;
    };

    var mergeArrays = function(arr1, arr2, length){
        var mergedArray = [],
            i = 0,
            j = 0;

        for (var n = 0; n < length; n++){
            if ((arr1[i] <= arr2[j]) || (typeof arr2[j] === "undefined")) {
                if (typeof arr1[i] !== "undefined") {
                    mergedArray.push(arr1[i]);
                    i++;
                }
            } else if ((arr2[j] < arr1[i]) || (typeof arr1[i] === "undefined")) {
                if (typeof arr2[j] !== "undefined") {
                    mergedArray.push(arr2[j]);
                    j++;
                }
            }
        }

        return mergedArray;
    };

    console.log("initialArray:", array);
    var output = mergeSort(array);
    console.log("merge sorted Array:", output);

})();