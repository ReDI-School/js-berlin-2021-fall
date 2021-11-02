<!-- .slide: id="lesson12" -->

# Basic Frontend - Fall 2021

Lesson 12, Tuesday, 2021-11-02

---

### Recap: Modifying objects

```js
let carlo = {
    firstName: "Carlo",
    lastName: "Trimarchi",
    age: 39,
};

carlo.age = 26;

console.log(carlo.age); // -> 26
```

---

### Recap: Nested objects

```js
let carlo = {
    name: "Carlo",
    age: 26,
    address: {
        street: "Blablastraße",
        number: 21,
        zipCode: 12345,
    },
};

console.log(carlo.address.street); // -> "Blablastraße"

carlo.address.street = "Otherstraße";
```

---

### Recap: Interacting with the DOM

```html
<input id="name" type="text" />
<button onclick="sayHello();">Submit</button>
```

```js
let nameElement = document.getElementById("name");

function sayHello() {
    
    let inputValue = nameElement.value;
    console.log("Hello," inputValue);
}
```

The text content of an `input` element (as an object) is accessible as the property `.value`.

---

### Interacting with the DOM

```html
<div id="myContent">Hello!</div>
```

```js
let myContentElement = document.getElementById("myContent");
myContentElement.textContent = "Goodbye!";
```

The text content within a `div` element is accessible as the property `.textContent`.

---

### Interacting with the DOM

```html
<div id="myContent">Hello!</div>
```

```js
let myContentElement = document.getElementById("myContent");
// Equivalent to css: "background-color: blue;"
myContentElement.style.backgroundColor = "blue";
// Remember this?
document.body.style.backgroundColor = "red";
```

You can add style to an element by modifying its nested `style` object.

---

### Exercise 1

Create an input field, a button element, and an empty div. When the user enters a name in the input field, then clicks the button, the div should say, "Hello Owen!" (whatever name was entered).

---

### Exercise 1.5

Using the previous exercise, when the user clicks the button without entering a name (the input field is empty), the page should show a validation error: "Name must be entered", and the error text color should be red.

---

### Exercise 2

Create an input field and a button element. When the user enters a color name in the input field and clicks the button, the background color of the page should change to that color.
