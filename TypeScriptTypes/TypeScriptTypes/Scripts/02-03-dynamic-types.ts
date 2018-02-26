module demo_02_03 {
    var person: string;
    person = 'Jonathan Hernandez';

    console.log(person.substring(1,3));

    // ERROR !
    //person = {
    //    name: 'John',
    //    age: 25
    //}

    console.log(person.substring(1, 5));
}