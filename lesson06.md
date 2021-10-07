<!-- .slide: id="lesson6" -->

# Basic Frontend - Fall 2021

Lesson 6, Tuesday, 2021-10-05

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

