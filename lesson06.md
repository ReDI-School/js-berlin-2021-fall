<!-- .slide: id="lesson6" -->

# Basic Frontend - Fall 2021

Lesson 6, Thursday, 2021-10-05

---

### Recap

```js
if (condition) {
  // block of code that
  // will run ONLY if
  // condition is true
}
```

---

```js
if (condition) {
  // block of code that
  // will run ONLY if
  // condition is true
} else {
  // when will this execute??
}
```


The `else` block will execute only if `condition` is `false`.
<!-- .element: class="fragment" -->

---

```js
if (condition) {
  // block of code that will run
  // ONLY if condition is true
} else if (secondCondition) {
  // when will this execute??
} else {
  // ..
}
```

The `else if` block will execute only if `secondCondition` is `true` **and** all conditions above are `false`.
<!-- .element: class="fragment" -->

---

### rules of if, else if, else

```js
if (condition1) {
  // some code ...
} else if (condition2) {
  // some other code ...
} else if (condition3) {
  // code, code, code ...
} else {
  // even more code ...
}
// JavaScript will continue from here.
```

---

### rules of if else if else

- JavaScript will go through the if/else-if/else statements from top to bottom.
- In our example, it will check condition1, then condition2, then condition3…
- If one of the conditions evaluates to true, JavaScript will execute it’s code block AND IGNORE EVERYTHING ELSE


---

## Series of separate if statements

If we put a series of `if` statements one after the other, they will be evaluated independently of one another.

```js
if (condition1) {
    // do this
}

if (condition2) {
    // do also this
}

if (condition3) {
    // and do also this
}
```

<!-- .slide: id="functions" -->

---

### Shopping exercise

Let's live code the solution together.


---

### Shopping exercise solution

```js
let money = 32;
let milkPrice = 2;
let cheesePrice = 4;
let breadPrice = 2;
let butterPrice = 1;

if (money >= milkPrice) {
  money -= milkPrice;
  console.log("bought milk");
}

if (money >= cheesePrice) {
  money -= cheesePrice;
  console.log("bought cheese");
}

if (money >= breadPrice) {
  money -= breadPrice;
  console.log("bought bread");
  if (money >= butterPrice) {
    money -= butterPrice;
    console.log("bought butter");
  }
}

console.log("Money left:", money);
```

---

### Ice cream exercise 

You have to go to the supermarket and buy ice-cream for your the party of your best friend.

Her instructions are:

Buy strawberry flavor. 

If that's not available, buy mango flavor.

If that's not available, buy the hazelnut one.  

If none of those are available, buy chocolate flavor. 

---

### Ice cream exercise solution

```js
let isStrawberryAvailable = false;
let isMangoAvailable = false;
let isHazelnutAvailable = true;

if (isStrawberryAvailable) {
    console.log("buying strawberry ice cream");
} else if (isMangoAvailable) {
    console.log("buying mango ice cream");
} else if (isHazelnutAvailable) {
    console.log("buying hazelnut ice cream");
} else {
    console.log("buying chocolate ice cream");
}
```

---

### Recap

In the first shopping exercise we need to buy as many things as possible, in a specific order, as long as we have enough money.

In the ice cream exercise we just need to choose one flavor, the first one that is available in an order of preference.


---

# Functions

---

### functions

A function is a reusable block of code.

A very simple function would be:

```js
function myFunction() {
  console.log("I am in a function!");
}
```

You can call the function like this:

```js
myFunction();
```

---

you can write any amount of code you want in the function:

```js
function sayHello() {
  console.log("Hello There!");

  console.log("...");

  console.log("General Kenobi!");
}

sayHello();
```

---

A function can contain any kind of code:

```js
function isCold() {
    let temperature = 10;
    if (temperature < 10) {
        console.log("it's cold outside");
    } else {
        console.log("it's not that cold");
    }
}

isCold();
```

---

### Quiz

What does the following code output to console?

```js
function output42() {
  console.log("42");
}
```

Answer: Nothing, because we never _call_ the function
<!-- .element: class="fragment" -->

---

### Quiz

What does the following code output to console?

```js
function output42() {
  console.log("42");
}

output42();
output42();
```

Answer: "42" and "42"
<!-- .element: class="fragment" -->

---

### Function definition and execution

It's important to distinguish between 2 parts when working with functions:

1. function definition (also called function declaration)
1. function execution (calling the function) 

---

### Function definition and execution

```js
// this is the function definition
function sayHi() {
    console.log('Hi');
}

// this is the function call
sayHi();
```

We always need to define a function in order for us to call it.

---

### Function definition

There are 3 mandatory parts in a function definition:

1. the `function` keyword
1. the `name` of the function we are defining, followed by parenthesis
1. the function `body`, surrounded by curly braces

---

### Function execution

To call (execute) a function we need to write its `name` followed by parenthesis.

---

### Practice


1. create a function called `hello` that outputs "Hello, [your name]"
1. create a function called `sum`. 
    - declare 2 variables `a` and `b` inside of it 
    - assign the 2 variables any numerical value you want
    - output the sum of `a` and `b`
1. create a function called `square`
    - declare a variable `n` inside of it
    - assign a numerical value to it
    - output the square of `n`

Call the 3 functions and check the result in the console.

<!-- .slide: style="font-size:70%;" -->
---

### Following the flow or a program with functions

```js
console.log('I go first');

function sayHey() {
    console.log('Hey!'); // <- when do we see this in the console?
}

console.log('I go second');
sayHey(); // <- what do we see here in the console?
console.log('I go last');
```


---

## Function parameters and arguments

Let's say we want a few variations of the function `sayHello`. We might want another function that says "hi", another one that says "hey" and a last one that says "hallo".

How can we do it?

---

### Function parameters and arguments

```js
function sayHello() {
    console.log('hello');
}

function sayHey() {
    console.log('hey');
}

function sayHi() {
    console.log('hi');
}

function sayHallo() {
    console.log('hallo');
}

sayHello();
sayHey();
sayHi();
sayHallo();
```

---

### Function parameters and arguments

The code works, but we are basically writing the same function 4 times and just changing a string inside.

We normally want to avoid useless repetitions.

Luckily, functions have the options to accept something called `parameters` that let us do just that.

---

### Function parameters and arguments

```js
function say(text) {
    console.log(text);
}

say('hello');
say('hi');
say('hey');
say('hallo');
```

- `text` is a function `parameter`
- "hello", "hi", "hey", "hallo" are `arguments`. In each function call they will be assigned to the `text` parameter

---

### Multiple parameters

A function can have any number of parameters

```js
function multipleParameters(parameter1, parameter2, parameter3) {
    console.log(parameter1, parameter2, parameter3);
}

multipleParameters("argument1", "argument2", "argument3");
```

Each argument will be assigned to the corresponding parameter in order, from left to right

---

### Multiple parameters

```js
function greet(greeting, name) {
    console.log(greeting, name);
}

greet("hey", "Harald");
greet("hello", "Sevtap");
```

---

## Returning values

So far we've written functions only to output values to the console.

Most of the times, we use functions to make a calculation and we want to use the result of that calculation outside of the function.

We can use the `return` keyword for that.

```js
function giveMe5() {
  return 5;
}

let number = giveMe5();
console.log(number); // 5
```

---

### Returning values: example

```js
function score(age, height) {
    return age + (height * 5);
}

function winner(player1Score, player2Score) {
    if (player1Score > player2Score) {
        console.log("player 1 won!");
    } else if (player2Score > player1Score) {
        console.log("player 2 won!");
    } else {
        console.log("it's a draw!");
    }
}

let jimScore = score(40, 164);
let jessicaScore = score(27, 181);
winner(jimScore, jessicaScore);
```

---

### Returning values

Once a function returns, no other code within the function will be executed:

```js
function giveMe5() {
  return 5;
  console.log("I returned 5"); // CODE WILL NEVER EXECUTE!!!
}
```

---

### Returning values

A function can have multiple `return` statements. The first `return` statement exits the function:

```js
function isCold(temperature) {
  if (temperature < 15) {
    return true;
  } else {
    return false;
  }
}
```

---

### Quiz

What is the value of `result`?

```js
function giveMe5() {
  return 5;
}

let result = giveMe5() * giveMe5();
```

Answer: 25
<!-- .element: class="fragment" -->

---

### Exercise 1

Write a `min` function that returns the smaller of the two numbers. If the 2 values are the same, it will return the first value.

```js
min(1, 2);    // should return 1
min(100, 99); // should return 99
min(-10, 0);  // should return -10
```

---

### Exercise 2

Write a function that takes name of a person, their age, and the language they speak, and returns a string that introduces this person.

Example:

John, 18, English &#8594; **"Hello! my name is John, I am 18 years old and I speak English."**

---

### Extra exercises

Try to as many exercises as possible from the ones listed [here](exercises/2021-10-05)

