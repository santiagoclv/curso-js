// functions
calculateAge(1965); // because hoisting I can call it from here.

function calculateAge(year) {
    console.log(2016 - year);
}

// retirement(1956);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}

// variables
console.log(age); // it will be undefined from here, anyway because hoisting I can call it before it is defined.
var age = 23;

function foo() {
    console.log(age);  // it will be undefined from here, because it will be pointing to the age variable on the Variable Object in the Ex Context.
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
