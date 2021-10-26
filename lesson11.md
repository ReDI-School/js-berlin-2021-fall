<!-- .slide: id="lesson11" -->

# Basic Frontend - Fall 2021

Lesson 11, Tuesday, 2021-10-26

---

### Data types recap

- number
- string
- boolean
- undefined

---

### Data types recap

What's the data type of the `book` variable here?

```js
let book = {
    title: "Frankenstein",
    author: "Mary Shelley",
    publicationYear: 1818
};
```

How can we check the type of a variable in JavaScript?
<!-- .element: class="fragment" data-fragment-index="2" -->

---

### Data types recap: quiz

What's the output?

```js
typeof '';
```

---

### Data types recap: quiz

What's the output?

```js
typeof {};
```

---

### Data types recap


```js
let book = {
    title: "Frankenstein",
    author: "Mary Shelley",
    publicationYear: 1818
};
```

How can we output the title of the book to the console?

---

### Data types recap

```js
let book = {
    title: "Frankenstein",
    author: "Mary Shelley",
    publicationYear: 1818
};

console.log(typeof book.publicationYear);
```

What's the output of the command above?

---

### Modifying objects

So far we've only been able to read values from objects.

We can change the value of a property the same way we do with variables.

```js
let me = {
    firstName: "Carlo",
    lastName: "Trimarchi",
    age: 39
}

me.age = 26;

console.log(me);
```

---

### Exercise
#### Fix the menu

Someone destroyed the menu of an online restaurant. Replace the current values with the correct ones: `Halloumi Burger`, `Sweet Potato Fries`, `Mayo`, `Cola`. 

Output the object to the console to check that it's correct.

```js
let dinnerMenu = {
    mainCourse: "H411110um1 Burg3r",
    sideDish: "Sw337 P0744470 Fr13s",
    dipSauce: "M44410",
    drink: "K014",
};
```

---

### Modifying objects: adding new properties

Besides changing the values of existing properties, we can also add new properties to an object.

```js
let dinnerMenu = {
    mainCourse: "H411110um1 Burg3r",
    sideDish: "Sw337 P0744470 Fr13s",
    dipSauce: "M44410",
    drink: "K014",
};

dinnerMenu.dessert = "Ice cream";

console.log(dinnerMenu);
```

---

### Nested objects

Objects can contain other objects.


```js
let me = {
    name: "Carlo",
    age: 26,
    address: {
        street: "Blablastraße",
        number: 21,
        zipCode: 12345,
    },
};
```

How can I output the `street` property?

---

### Nested objects

We can nest 

```js
let me = {
    name: "Carlo",
    age: 26,
    addresses: {
        italy: {
            main: {
                street: "Via Blabla",
                number: 12,
                zipCode: 12345,
            },
            secondary: {
                street: "Via Rossi",
                number: 99,
                zipCode: 12345,
            }
        },
        germany: {
            main: {
                street: "Blablastraße",
                number: 21,
                zipCode: 12345,
            },
            secondary: {
                street: "Someotherstraße",
                number: 99,
                zipCode: 12345,
            },
        },
    },
};

console.log(me.addresses.italy.main.street);
```

---

### Nested objects 

Have we seen examples of nested objects anywhere, so far?

---

### Interacting with the DOM

We can use the `input` element in HTML for reading values typed by a user and use those values in JavaScript.

```html
<input id="name" type="text">
<button onclick="sayHello();">Submit</button>
```

```js
let nameElement = document.getElementById("name");

function sayHello() {
    let inputValue = nameElement.value;
    console.log("Hello," inputValue);
}
```

---

### Exercise


- [Color scheme selector exercise](https://github.com/ReDI-School/js-berlin-2021-fall/tree/main/exercises/2021-10-26/color-scheme-selector)
