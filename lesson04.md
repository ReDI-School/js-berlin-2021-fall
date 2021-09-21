<!-- .slide: id="lesson4" -->

# Basic Frontend - Fall 2021

Lesson 4, Thursday, 2021-09-23

---

### Lesson overview

* `undefined` datatype
* Operator precedence
* Operator associativity
* Conditional statements

---

### Recap

Name the operators:

```js
&&
<
===
||
+
**
```

---

### Recap

Name the operators:

```js
&&    // logical AND
<     // less than
===   // strict equality
||    // logical OR
+     // addition
**    // exponentiation
```

---

### Operators and data types

| Data Type | Operators | Example |
| ----- | --------- | ------- |
| `number` | `+ - * / **`<br/>`=== !== < > <= >=` | `5 + 4 * 3`<br/>`7 / 2 - 2`<br/>`32 > 45` |
| `string` | `+ === !==` | `"Pi" === "Pa"`<br/>`"Hello" + " World"` |
| `boolean` | <code>&#124;&#124; && ! === !==</code> | `true && !false` |

---

### What does it output?

```js
let name = "Sevtap";
console.log("Hello " + name);
```

Answer: It outputs "Hello Sevtap" <!-- .element: class="fragment" -->

---

### What does it output?

```js
let greeting = "Hello";
let name = "Sevtap";
console.log(greeting + " " + firstName);
```

Answer: Error, "firstName" is not defined <!-- .element: class="fragment" -->

---

### What does it output?

```js
console.log("It is " + temperature + " degrees");
let temperature = 22;
```

Answer: Error, "temperature" is not defined <!-- .element: class="fragment" -->

---

### Data Type: Undefined

* **Undefined** has only one value: `undefined`
* It indicates the unintentional absence of any value
* `undefined` is automatically assigned to variables

---

### Undefined example

```js
let x;  // no value is assigned to x
console.log(x); // undefined
console.log(typeof x); // "undefined"
console.log(x === undefined); // true
````

---

### Operator precedence

What do you think is the result?

```js
2 + 2 * 2
```

Result: `6` <!-- .element: class="fragment" -->

---

### Operator precedence (cont.)

* JavaScript supports precedence (priority) for operators
* Operators with higher precedence are evaluated before operators with lower precedence
* Full List: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
* Multiplication (15) has higher precedence than addition (14) - multiplication wins

---

### Operator precedence (cont.)

* Parentheses have the highest precedence (21) and always win:

```js
(2 + 2) * 2   // 8
2 + (2 * 2)   // 6
```

* When in doubt, use parentheses!

---

### Quiz

What is `x` ?

```js
let x = 4 + 6 < 3 + 8;
```

Result: `true` <!-- .element: class="fragment" -->

---

### Best practice: Use extra variables

Which of the two is more readable?

```js
let x = 4 + 6 < 3 + 8;
```

```js
let sum1 = 4 + 6;
let sum2 = 3 + 6;
let x = sum1 < sum2;
```

---

### Operator associativity

What happens when operators have the same precedence?

```js
1 + 2 + 3
(1 + 2) + 3  // first, 1 + 2 is computed (left to right)
(3) + 3      // returns 6
```

Most operators are left-to-right associative. If in doubt,
consult [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

---

### Quiz

What is `x`?

```js
let x = 2 * 2 * 2;
```

x is 8 <!-- .element: class="fragment" -->

---

### Quiz

What is `x`?

```js
let x = 5 < 6 < 7
```

* Answer: It's pointless  <!-- .element: class="fragment" -->

---

Let's break it down:

```js
5 < 6 < 7
(5 < 6) < 7   // 5 < 6 is true
true < 7      // pointless comparison!
```

Comparing a boolean to a number makes no sense. Do not chain comparison operators.

---

### Quiz

What does the following return?

```js
5 === 5 === 5
```

---

### Quiz

What does the following return?

```js
5 === 5 === 5
```

```js
(5 === 5) === 5
true === 5         // Pointless. Returns false
```

---

<!-- .slide: id="if" -->
# Conditional Statements

---

### Conditional Statements

Up until now, we wrote code line by line.

But what if I want to run some code only if a certain condition is true or false? For example, only run code when the user is logged in?

![if](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals/cookie-choice-small.png)<!-- .element height="200px" style="position: fixed; left: 30%" -->

---

### If statement

```js
if (condition) {
  // block of code that
  // will run ONLY if
  // condition is true
}
```

---

### If statements

```js
if (condition) {
  // your code here
}
```

* `condition` must be a boolean
* The code in the block is executed only if the boolean is `true`
* If the boolean is `false`, the code block is _not_ executed

---

### if Statements - Examples

```js
if (food === 'pizza') {
  console.log('My favorite!');
}
```

```js
if (money < 1000000) {
  console.log('You are not rich :p');
}
```

```js
if (canSpeakRussian) { // same as: canSpeakRussian === true
  console.log('Привет!');
}
```

---

### if statements - quiz

What does the code below output to `console.log`?

```js
let language = "German";

if (language === "German") {
  console.log("Guten Tag");
}
if (language === "French") {
  console.log("Bonjour");
}
```

`"Guten Tag"`
<!-- .element: class="fragment" -->

---

### if statements - quiz

What does the code below output to `console.log`?

```js
let language = "Spanish";

if (language === "German") {
  console.log("Guten Tag");
}
if (language === "French") {
  console.log("Bonjour");
}
if (language !== "German" && language !== "French") {
  console.log("Good day");
}
```

`"Good day"`
<!-- .element: class="fragment" -->

---

### Code Blocks: {}

Code blocks contain the code between `{` and `}`, and should be indented for better readability:

```js
if (language === "German") {
  // In VSCode, you can indent code by pressing the "Tab" key,
  // or right-click and choose "Format Document"
  console.log("Guten Tag");
}
```

---

### Code Blocks: {}

All variables defined in code blocks only exist inside the block (technical term: “block scope”)

```js
let name = "John Doe";

if (name === "John Doe") {
  let greeting = "Hi dude";
}
if (name === "Mary Doyle") {
  let greeting = "Hello my dear";
}

console.log(greeting); // ERROR!!!!
```

---

### Code Blocks: {}

Correct solution:

```js
let name = "John Doe";

let greeting;
if (name === "John Doe") {
  greeting = "Hi dude";
}
if (name === "Mary Doyle") {
  greeting = "Hello my dear";
}

console.log(greeting); // "Hi dude"
```

---

### Quiz

What does it output?

```js
let food = "broccoli";

if (food === "pizza") {
    console.log("yum yum");
}
```

Solution: Nothing, since the condition in the `if` is `false`
<!-- .element: class="fragment" -->

---

### Quiz

What does it output?

```js
let age = 42;

if (age >= 18) {
    console.log("you are allowed to drive a car");
}
if (age < 18) {
    console.log("you are not allowed to drive a car");
}
```

Solution: First condition is `true`, so it outputs "you are allowed to drive a car"
<!-- .element: class="fragment" -->

---

# Task

Define a variable `hour` and set it to `17`. Make an `if` statement that outputs `good day` if `hour` is less than 18. Now change `hour` to `19` and run the code again. What changed?

Create two variables for your and your neighbor's age. Output "I am younger" if your age is smaller than your neighbor's age.

---

# Task

Abdullah invented a game where the player with the highest score wins. The score is the player's height (in cm) plus five times the player's age.

1. Create variables for the heights and ages for you and a person next to you
1. Calculate the scores for you and your neighbor
1. Decide who wins, output the winner and their score to the console. Remember: there can be a draw (both players with the same score).
