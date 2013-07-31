(function() {

    // Karatsuba multiplication: 
    //
    // Multiply two n-digit numbers recursively.
    // Blows up the third-grade method of multiplying two big numbers
    //
    // *: 10^n(ac) + (10^n/2)(ad + bc) + bd

    var Karatsuba = function(n1, n2) {
        console.log("MULTIPLY " + n1 + " AND " + n2);

        n1 = n1.toString().split("");
        n2 = n2.toString().split("");
        
        var product = this.multiply(n1, n2);
        console.log("final product:", product);
    };

    Karatsuba.prototype.multiply = function(n1, n2){
        console.log("n1: ", n1, ", n2: ", n2);

        if ((n1.length === 1) && (n2.length === 1)) {
            return parseInt(n1[0], 10) * parseInt(n2[0], 10);
        }

        var a = this.splitFirstHalf(n1),
            b = this.splitSecondHalf(n1),
            c = this.splitFirstHalf(n2),
            d = this.splitSecondHalf(n2);

        console.log("a", a);
        console.log("b", b);
        console.log("c", c);
        console.log("d", d);

        var ac, ad, bc, bd;

        ac = this.multiply(a, c);
        ad = this.multiply(a, d);
        bc = this.multiply(b, c);
        bd = this.multiply(b, d);

        return Math.pow(10,n1.length)*(ac) + Math.pow(10,n1.length/2)*(ad + bc) + bd;        
    };

    Karatsuba.prototype.splitFirstHalf = function(n){
        if (hasOddLength(n)) {
            n.unshift("0");
        }
        
        return n.slice(0, n.length/2);
    };

    Karatsuba.prototype.splitSecondHalf = function(n){
        return n.slice(n.length/2, n.length);
    };

    var hasOddLength = function(array) {
        return array.length%2 !== 0;
    };

    var num1 = 123456,
        num2 = 123456;

    var product = new Karatsuba(num1, num2);
    
    // 1234 * 5678 = 7006652

})();