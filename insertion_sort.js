(function() {

    // Insertion sort: 
    // Iterate over array
    // If an item is larger than its previous element iterate down the array until it isn't.
    // Shift each item up the array as you traverse down it, until the inequality is satisfied.

    // n^2 runtime

    var array = [5,4,3,2,1],
        i;

    for (i = 0; i < array.length; i++)
    {
        console.log("***********************");
        console.log("*** Iteration Start ***");
        console.log("array:", array);

        var toInsert = array[i];

        if (i > 0 && toInsert < array[i-1])
        {
            // Iterate the previous items of the array
            for (var x = i-1; x >= 0; x--) {
                if (array[x] <= toInsert) {
                    array[x+1] = toInsert;
                    console.log("<=:", array);
                    break;
                }
                else if (array[x] > toInsert) {
                    array[x+1] = array[x];
                    array[x] = toInsert;
                    console.log(">:", array);
                }
            }
        }

        console.log("*** Iteration End ***");
        console.log("array:", array);
        console.log("*********************");
    }

    console.log("*** Program End ***");
    console.log("array:", array);

})();