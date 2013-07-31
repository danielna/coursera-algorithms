(function() {

    // Karatsuba multiplication: 
    //
    // Multiply two n-digit numbers recursively.
    // Blows up the third-grade method of multiplying two big numbers
    //
    // *: 10^n(ac) + (10^n/2)(ad + bc) + bd

    var Karatsuba = function(n1, n2) {
        console.log("MULTIPLY " + n1 + " AND " + n2);
        var product = this.multiply(n1, n2);
        console.log("final product:", product);
    };

    Karatsuba.prototype.multiply = function(n1, n2){
        var nLength = n1.toString().length;
        console.log("n1: ", n1, ", n2: ", n2);

        if ((Math.abs(n1)/10 < 1) && (Math.abs(n2)/10 < 1)) {
            return n1 * n2;
        }

        var a = this.splitFirstHalf(n1),
            b = this.splitSecondHalf(n1),
            c = this.splitFirstHalf(n2),
            d = this.splitSecondHalf(n2);

        var ac, ad, bc, bd;

        ac = this.multiply(a, c);
        ad = this.multiply(a, d);
        bc = this.multiply(b, c);
        bd = this.multiply(b, d);

        return Math.pow(10,nLength)*(ac) + Math.pow(10,nLength/2)*(ad + bc) + bd;        
    };

    Karatsuba.prototype.splitFirstHalf = function(n){
        var nString = n.toString();
            nLength = nString.length;
        return parseInt(nString.substring(0, nLength/2), 10);
    };

    Karatsuba.prototype.splitSecondHalf = function(n){
        var nString = n.toString();
            nLength = nString.length;
        return parseInt(nString.substring(nLength/2, nLength), 10);
    };

    var num1 = 1234,
        num2 = 5678;

    var product = new Karatsuba(num1, num2);
    
    // 1234 * 5678 = 7006652

})();