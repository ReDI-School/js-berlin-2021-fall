<!-- .slide: id="lesson8" -->

# Basic Frontend - Fall 2021

Lesson 8, Tuesday, 2021-10-12

---

### Recap

* What do we remember from last week?

---

### Brain teaser

Given the `min` function from last week's exercise, can you implement a `min3` that takes three arguments and returns the smallest of the three by only calling the `min` function?

---

```js
function min3(a, b, c) {
    return min(a, min(b, c));
}
```

---

### HTML and JavaScript

HTML Buttons have a `onclick` attribute that executes JavaScript when the button is clicked:

```html
<button onclick="console.log('I was clicked!')">Click me!</button>
```

However, writing JavaScript in `onclick` is rather tedious. Can you think of a better way?

---

### HTML and JavaScript

How about calling a function instead?

```html
<button onclick="handleButtonClick()">Click me!</button>
```

In `main.js`:

```js
function handleButtonClick() { /* TODO */ }
```

---

### Changing the background color

The browser provides variables and functions, like `console.log`.

To read or set the current page's background color, we get get or set `document.body.style.backgroundColor`:

```js
// print the current color to console
console.log("bgColor:", document.body.style.backgroundColor);
// change the current color:
document.body.style.backgroundColor = "red";
```

---

### Task 1

Create a webpage with three buttons, "Red", "Green", "Blue".

When your user presses the button, set the document.body.style.backgroundColor to that color.

---

### Task 1 - Bonus

Add a new button "dark" that enables the dark mode. When the user presses dark, set the document's background to the dark version of that color.

Example: If the current color is "Blue" and the user pressed "dark", set the color to "DarkBlue"

---

### Task 2

Your team is tasked to write the number guessing game.

There is a secret number between 1 and 100. The user can enter any number, and the computer will tell whether that number is larger or smaller than the secret number. The game is won when the user enters the secret number.

Your colleague already wrote most of the frontend, but you need to finish the `checkGuess` function.

The function gets the guess and the secret number as parameter and needs to return a string explaining to the user whether they guessed too low, too high or whether they won the game.

Finish the code [here](https://github.com/ReDI-School/js-berlin-2021-fall/tree/main/exercises/2021-10-12/number_guessing)!

---

### Task 2 - Bonus

Also tell the user in how many tries they finished the game. Example:

> You won with 12 guesses.

---

### Task 3

You're into e-commerce now. Your colleague wrote a shopping cart that lets the user choose the amount of socks and hats that they want to order. What's left is to compute the amount of EUR that the user has to pay and return that from the `computeTotal` function.

Finish the code [here](https://github.com/ReDI-School/js-berlin-2021-fall/tree/main/exercises/2021-10-12/webshop)!

---
