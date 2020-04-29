# Variable declarations

The main difference between LET/CONST and VAR:

LET/CONST: 
* Block scope.
* no hoisting; need to be declared before using it. (Dead block)

VAR:
* Function scope.
* hoisting

# * Bitwise operators:

```js

const isFactorial = (n, t = 2) => n === 1 ? true : n !== (n|0) ? false : isFactorial(n / t, t + 1);

```

# IIFEs

On ES5 you need to use a functions to create a IIFE but on ES6 you only need a block.

```js

(
 function() {
    var msj = "Hola";
    console.log(msj);   
 }   
)();

// is the same that

{
    const msj = "Hola";
    console.log(msj);   
}

```

# Arrow Functions.

* Lexical 'this' keyword