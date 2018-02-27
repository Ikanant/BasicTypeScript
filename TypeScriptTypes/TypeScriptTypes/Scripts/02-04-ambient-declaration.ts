/// <reference path="typings/knockout-2.2.d.ts" />
module demo_02_04 {
    // KO beloings to the imported Knockout nuget pacakge we installed
    declare var ko: KnockoutStatic;
    
    var name = ko.observable('Jonathan Hdez');

    var id = ko.observable(1);

    var guy = {
        id: id,
        fullName: name
    }

    var value: string = guy.fullName();
    console.log(value);
}