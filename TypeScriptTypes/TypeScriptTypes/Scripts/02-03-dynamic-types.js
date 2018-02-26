var demo_02_03;
(function (demo_02_03) {
    var person;
    person = 'Jonathan Hernandez';
    console.log(person.substring(1, 3));
    // ERROR !
    //person = {
    //    name: 'John',
    //    age: 25
    //}
    console.log(person.substring(1, 5));
})(demo_02_03 || (demo_02_03 = {}));
//# sourceMappingURL=02-03-dynamic-types.js.map