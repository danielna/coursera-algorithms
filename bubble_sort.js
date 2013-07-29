(function() {

    // Bubble sort: 
    // Continually iterate over an array, swapping pairs (i, j) where j < i.

    // n^2 runtime

    var array = [5,4,3,2,1];

    // Recursive
    var bubbleSort = function(array){
        var sorted = true;
        
        for (var i = 0; i < array.length; i++){
            var a0 = array[i],
                a1 = array[i+1];

            if (!a1) {
                break;
            }
            if (a0 > a1) {
                console.log("SWAP");
                console.log("array before:", array);
                sorted = false;
                array[i+1] = a0;
                array[i] = a1;
                console.log("array after:", array);
            }
        }
        if (!sorted) {
            return bubbleSort(array);
        }

        return array;
    };

    console.log("bubbleSort(array):", bubbleSort(array));

})();