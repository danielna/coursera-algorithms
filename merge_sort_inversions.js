(function() {

    // count the number of inversions (i, j) in an array where i < j
    // piggyback on merge sort
    // runs in nlog(n)

    // 1. Halve recursively, base case 1 element
    // 2. As you pop the stack, merge elements.

    // Load the contents of PS1.txt
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/input/PS1.txt', false);
    xhr.send(null);

    // Convert the STRINGS to INTEGERS
    var arrayString = xhr.responseText.split('\n');
    var array = [];
    for(var x in arrayString) {
        array.push(parseInt(arrayString[x], 10));
    }

    // var array = [6, 4, 3, 1, 5, 3, 5];
    // #inversion of above test array: 11
    var inversions = 0;

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

        return mergeArrays(sortedArray1, sortedArray2, length);
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
                    inversions += (arr1.length - i);
                    j++;
                }
            }
        }
        return mergedArray;
    };

    console.log("initialArray:", array);
    var output = mergeSort(array);
    console.log("merge sorted Array:", output);
    console.log("inversions:", inversions);

})();

