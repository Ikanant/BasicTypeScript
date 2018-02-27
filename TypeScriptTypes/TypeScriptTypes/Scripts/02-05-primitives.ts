module demo_02_05 {
    // Any
    var data: any;
    var info;
    var doSomething = function (arg) { return arg; }
    var x = doSomething(5); // <=== the variable x & 5 is of type ANY because it's infered from the line above

    // NUMBERS
    var age: number = 12;
    var score: number = 12.41;
    var rating = 99.12;

    // BOOLEANS
    var hasData: boolean = true;
    var isReady = true;
    var isBald = function () { return 'yes'; }
    var hasHair = !!isBald(); // <=== Applying !! to a valye will return a boolean of true or false in JS

    // STRINGS
    var firstName: string = 'Jonathan';
    var lastName = 'Hdez';

    function getArrayLength(x: string[]) {
        var len: number = x.length;
        return len;
    }

    var names: string[] = ['Jonathan', 'Hdez', 'Reinoso'];
    var firstPerson = names[0];
    console.log(getArrayLength(names));

    // NULL
    var guitarSales: any = null
    var animal = null;
    var orderDate Date = null;

    // UNDEFINED
    var quantity: number;
    var company = undefined;
    // The above 2 variables both have a value of undefined
}