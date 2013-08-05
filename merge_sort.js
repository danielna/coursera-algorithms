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
            arraySplit2 = array.slice(length/2, array.length);

        // console.log("arraySplit1:", arraySplit1);
        // console.log("arraySplit2:", arraySplit2);

        var sortedArray1 = mergeSort(arraySplit1);
        var sortedArray2 = mergeSort(arraySplit2);

        mergedArray = mergeArrays(sortedArray1, sortedArray2, length);
        return mergedArray;
    };

    var mergeArrays = function(arr1, arr2, length){
        var mergedArray = [],
            i = 0,
            j = 0;

        // console.log("MERGE:");
        // console.log("arr1:", arr1);
        // console.log("arr2:", arr2);  

        for (var n = 0; n < length; n++){
            // console.log("i:", i);
            // console.log("j:", j);
            // console.log("arr[i]:", arr1[i]);
            // console.log("arr[j]:", arr2[j]);
            if ((arr1[i] < arr2[j]) || (typeof arr2[j] === "undefined")) {
                if (typeof arr1[i] !== "undefined") {
                    mergedArray.push(arr1[i]);
                    i++;
                }
            } else if ((arr2[j] < arr1[i]) || (typeof arr1[i] === "undefined")) {
                if (typeof arr2[j] !== "undefined") {
                    mergedArray.push(arr2[j]);
                    j++;
                }
            } else {
                mergedArray.push(arr1[i]);
                mergedArray.push(arr2[j]);

                i++;
                j++;
            }
        }

        // console.log("MERGED:", mergedArray);
        return mergedArray;
    };


    console.log("initialArray:", array);
    var output = mergeSort(array);
    console.log("merge sorted Array:", output);

})();