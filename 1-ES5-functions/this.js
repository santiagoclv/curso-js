//console.log(this);

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this); // This points to 'john'
        console.log(2016 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this); // This points to window, because it not a method, it just a function.
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};


mike.calculateAge = john.calculateAge;
mike.calculateAge(); // now THIS on calculateAge point to mike, because it is running inside mike.