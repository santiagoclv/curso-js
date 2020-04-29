# ___Excecution Context__: 
the environment where sections of code are executed._

The first `execution context` that is put on the stack is called `global context`, and it is where everyting lives until the app ends.
Then every time a function is called, a new `execution context` is created and put on top the current excecution context (this one could be the global context) in the stack of context. Once a execution context has finished it would be removed from the stack and the context that is below will continue running.

Every context could be seen as an object that contain 3 properties that are created before it starts executing the instruction within itself.
* __Variable Object__: that contain the arguments of the current function, functions declarations pointers and the variables declarations set to undefined. The variables and functions are available before execution has been started, this is called hoisting. That is why a function that is ~~declared~~ after it is called does not give an error.
* __Scope Chain__: Defines the scope where every variable are accessible (including arguments), this scopes is __restricted__ by the _Lexical Scoping_ of the function ( a function that is lexically within another function gets access to the scope of the outher function )
* __This__: Its value is assigned on run time and by default it points to the global object (window). But when it is directlly used inside a _Method Call_, __This__ will point to the object that own that method.

# Closures

An inner function has always access to the variables and
parameters of its outer function, even after the outer function has returned.


# IIFE

It's commonlly used to implement modules of an app and help with the encapsulation.

```js 

var scoreController = (function (args) {
    var privateScore = Math.random() * 10;
    return {
        publicMethod: function () {
            return privateScore;
        }
    }
})("args");

scoreController.publicMethod();

console.log(scoreController.privateScore); // error

```

### Keep state function 

```js

function score() {
        var sc = 0;
        return function(change) {
            if (change) {
                sc++;
            }
            return sc;
        }
}
var keepScore = score();
console.log(keepScore(true)) // 1
console.log(keepScore(false)) // 1
console.log(keepScore(true)) // 2
console.log(keepScore(false)) // 2

```

# Event Delegation

We use event delegation when we wait for an event to bubble up from a child element to a parent element and take actions on that.
Every event bubble ups and it is propagated on its parents.

It is used for:
* When we have an element with a lot of child elements that we are interest in;
* When we want an event handler attached to an element that is not yet in the DOM when out page is loaded.
