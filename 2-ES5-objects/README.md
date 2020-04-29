_Unless it is a primitive variable ( _numbers, strings, boolean, undefined, null_ ), it will always be an object._

# Inheritance 
_It's posible through Prototype_

* Every JS object has a __prototype property__, which makes inheritance posible.
* __Prototype__ This is where we put method and properties that we want other object to inherit.
* The __constructor's prototype propertie__ is NOT the prototype of the Contructor itself, It's the prototype of ALL instances that are created through it.
* __Prototype Chain__ When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on the object's prototype. This continues going though the prototype's object's hierarchy until the method is found.

# Ways to get instances of classes

## NEW operator
_new constructor[([argumentos])]_

New operator creates a new object based on the definition made by a function of the same name as the Constructor.

```js
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

/***
 * As we now until now, when we run the function   
 * Person, _this_ will point to the global context (window) 
 */
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// This two prototypes could be inherithed by a new class that extends Person.
Person.prototype.calculateAge  = function() {
    console.log(2016 - this.yearOfBirth);
};
Person.prototype.lastName = 'Smith';

/**
 * Now, when we call Person after __new__
 * NEW will create a new object and will set the context of its __this__ to the new object.
 */
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

```

## Create method from Object
_Object.create(proto[, propertiesObject])_

With this method is possible to get instances of other objects and assign all its properties and methods with in the prototype property of the new object. Also it's possible to give it a second argument where could be defined own properties and own methods of the new object.

```js
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' },
    hi: { value: () => console.log("Hi!") }
});

```


# Object References - Primitive and Objects

At last a new instance is created from an object (Object.creat) or constructor function (new operator), objects are manage by its references even when they are pass as argument on a function. However when we assingn a primitive value to a variable from another, this variable will have a copy of that value. This also happens when we pass a primitive variable as argument of a function.

```js 

var obj1 = {
    age: 26
};
var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age); // output: 30
console.log(obj2.age); // output: 30

// Functions
var age = 27;
var obj = {
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age); // output 27
console.log(obj.city); // output: 'San Francisco'
```

# Bind and Call

```js

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

// Call "presentation" method from john but as it was called from emily's object. 
john.presentation.call(emily, 'friendly', 'afternoon');

// Return a function that will have the same scope chain as it was running as a john's method call, and the first argument will be 'friendly'. 
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

// Return a function that will have the same scope chain as it was running as a emily's method call, and the first argument will be 'formal'.
var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');


```
