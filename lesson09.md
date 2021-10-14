<!-- .slide: id="lesson9" -->

# Basic Frontend - Fall 2021

Lesson 9, Thursday, 2021-10-14

---

### Connect a function to a button

```html
<button onclick="speak()">click me!</button>
```

```js
function speak() {
    console.log('hey!');
}
```

When the button is clicked (`onclick`), the function `speak()` is called.

---

### Changing the style of the HTML document

The browser provides us with a list of special variables that we can use to control the style on the page:

```js
// background of the whole page
document.body.style.backgroundColor;

// text color
document.body.style.color;

// font size
document.body.style.fontSize;

// font family
document.body.style.fontFamily;
```

---

By default those variables are set to an empty string

```js
console.log(document.body.style.backgroundColor);
console.log(document.body.style.color);
console.log(document.body.style.fontSize);
console.log(document.body.style.fontFamily);
```

---

We can easily change their values, see the effect and console.log the value afterward

```js
document.body.style.backgroundColor = "#333333";
console.log(document.body.style.backgroundColor);

document.body.style.color = "#ffffff";
console.log(document.body.style.color);

document.body.style.fontSize = "24px";
console.log(document.body.style.fontSize);

document.body.style.fontFamily = "Arial";
console.log(document.body.style.fontFamily);
```

---

### Example

```html
<button onclick="redBackground()">Red</button>
<button onclick="getBackgroundColor()">Current background</button>
```

```js
function redBackground() {
    document.body.style.backgroundColor = "red";
}

function getBackgroundColor() {
    console.log(document.body.style.backgroundColor);
}
```

---

### Exercise: font size

- create an HTML page with 3 buttons with the text: `small`, `medium`, `big`
- create a function called `setFontSize`
- the function accepts 1 parameter and depending on the button clicked it changes the font size to `12px`, `16px` or `32px`

---

### Exercise: dark / light theme

- create an HTML page with 2 buttons: `dark` and `light`  
- create a function called `mode` that takes one parameter
- if the parameter is `"dark"`, change the background of the page to `"black"` and the text color to `"white"` 
- if the parameter is `"light"`, change the background of the page to `"white"` and the text color to `"black"` 

---

### Exercise: toggle button 

Do the same of the previous exercise, this time using a single button
