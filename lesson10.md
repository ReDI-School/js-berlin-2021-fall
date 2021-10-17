<!-- .slide: id="lesson10" -->

# Basic Frontend - Fall 2021

Lesson 10, Tuesday, 2021-10-19

---

### Lesson overview

* recap
* introducing JavaScript objects

---

### Recap: types

What Javascript types have we seen so far?

* Number
<!-- .element: class="fragment" -->
* String
<!-- .element: class="fragment" -->
* Boolean
<!-- .element: class="fragment" -->
* Undefined
<!-- .element: class="fragment" -->

---

### Recap: types

```js
let age = 39;
let firstName = "Carlo";
let lastName = "Trimarchi";
let nationality = "Italian";
let cityOfBirth = "Messina";
let favoriteColor = "green";
let hairColor = "black";
let canSpeakGerman = false;
let isVegetarian = true;
```

---

<!-- .slide: id="objects" -->

# Objects

---

### Problem with simple values

Let's imagine you need to describe three friends:

```js
let friend1Name = "Carlo";
let friend1IsTeacher = true;
let friend2Name = "Sevtap";
let friend2IsTeacher = true;
let friend3Name = "Adrian";
let friend3IsTeacher = true;
```

We need _a lot_ of variables.

---

### Problem with function parameters

Now imagine a function that operates on 2 people:

```js
function introduce(person1Name, person1Age, person1IsTeacher, person2Name, person2Age, person2IsTeacher) {
  console.log("Hello", person1Name, ", let me introduce you to", person2Name);
  // ...
}
```

The parameter list gets rather long, and if you'd like to introduce another variable,
it gets messy.

---

Wouldn't it be nicer if we could group information that belongs together somehow?

---

### Objects

An **object**, in Javascript, is a group of *key* / *value* pairs

We can think of key/value pairs as words in a dictionary

* a word is the **key**
* the definition is the **value**

![Dictionary](images/dictionary.jpg) <!-- .element width="500" style="display: block; margin: 0 auto;" -->

---

### Objects

Example:

```js
let person = {
  firstName: 'Carlo',
  lastName: 'Trimarchi',
  age: 39
};
```

Can you guess how we can create an object?

---

### Objects

To create an object we use curly braces `{}`.
```js
let emptyObject = {};
```

We put any key/value pair inside the `{}`

```js
let person = {
  name: 'Carlo'
  // the key is 'name', the value is 'Carlo'
};
```

---

### Objects

key/value pairs are also referred to as **properties**

```js
let person = {
  firstName: 'Carlo', // comma
  age: 39,            // comma
  isVegetarian: true  // comma is optional
};
```
* can you name all the properties in this **person** object?
* and its keys?
* and its values?

We can add as many properties as we want.
<!-- .element: class="fragment"  -->

---

### Objects: examples

```js
let book = {
  title: 'The Lord of the Rings',
  author: 'J. R. R. Tolkien',
  publicationYear: 1954,
  pages: 1216
};
```

---

### Objects: examples

Can you think of other things we can represent with objects?

* product in an e-commerce
<!-- .element: class="fragment"  -->
* HTML Elements
<!-- .element: class="fragment"  -->
* Data from cloud servers
<!-- .element: class="fragment"  -->
* much more...
<!-- .element: class="fragment"  -->

---

### Objects: accessing properties

Now we know how to create objects, what can we do with it?

```js
let me = {
    name: "Bob",
    age: 9
};

// we can access the value of a property using the . operator
let myName = me.name;

// we can also change the value
me.age = 10;
```

---

### Task: Introduction 1

Try it yourself:

create an object called `me` containing the following information about you:

* name
* favorite food
* hair color
* eye color

Use this object to introduce yourself via `console.log`, e.g. "Hi, I am Harald and my favorite food is pizza".

---

### Task: Introduction 2

Now create another object called `myFriend` with the same properties as in task 1.

Introduce your friend via `console.log`.

---

### Task: Introduction 3

Now create another object called `myFriend2` with the same properties as in task 1 & 2.

Introduce your other friend via `console.log`. How can you reduce copy/paste code?

---
