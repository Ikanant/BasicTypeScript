var demo_02_05;
(function (demo_02_05) {
    // Any
    var data;
    var info;
    var doSomething = function (arg) { return arg; };
    var x = doSomething(5); // <=== the variable x & 5 is of type ANY because it's infered from the line above
    // NUMBERS
    var age = 12;
    var score = 12.41;
    var rating = 99.12;
    // BOOLEANS
    var hasData = true;
    var isReady = true;
    var isBald = function () { return 'yes'; };
    var hasHair = !!isBald(); // <=== Applying !! to a valye will return a boolean of true or false in JS
    // STRINGS
    var firstName = 'Jonathan';
    var lastName = 'Hdez';
    function getArrayLength(x) {
        var len = x.length;
        return len;
    }
    var names = ['Jonathan', 'Hdez', 'Reinoso'];
    var firstPerson = names[0];
    console.log(getArrayLength(names));
})(demo_02_05 || (demo_02_05 = {}));
//# sourceMappingURL=02-05-primitives.js.map