(function() {

    // Selection sort: 
    // Treat the array as two separate arrays; the sorted and unsorted portions
    // Iterate the unsorted to find the lowest, swapping the key if a new val is lower
    // Put the key at the next location in the sorted array

    // n^2 runtime

    var array = [5,4,3,2,1];

    for (var i = 0; i < array.length; i++) {
        var min = i;

        console.log("start array:", array);

        for (var j = i + 1; j < array.length; j++){
            if (array[j] < array[min]) {
                min = j;
                console.log("min index:", min);
            }
        }

        // swap
        if (min != i) {
            var minVal = array[min];
            array[min] = array[i];
            array[i] = minVal;        
        }

        console.log("end array:", array);
    }

    console.log("sorted array:", array);



})();