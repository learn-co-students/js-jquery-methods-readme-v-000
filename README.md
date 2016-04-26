# jQuery Methods

## Objectives
+ Explain what a jQuery method is
+ Use jQuery methods to manipulate UI elements

## Intro

Now that we know about jQuery selectors, we know how to select HTML elements to be able to manipulate them. But how do you actually start doing the manipulating? Enter jQuery methods, a quick and easy way to apply effects to DOM elements.

## Attribute Methods

Attribute methods retrieve the value of a DOM attribute and set that value based on a specific parameter. There are a ton of attribute methods, including (but not limited to `addClass`, `removeClass`, `toggleClass`, and `val`)

### addClass

The `addClass()` function is called on a specific HTML element, and adds a class (passed in as a parameter) to that element.

Given the following HTML:

```html
<p> This is my paragraph</p>
```

And this CSS:
```css
.myBorder {
  border-color: blue;
  border-width: 5px;
  border-style: dotted;
}
```

In our HTML, we never applied the class `myBorder` to our `p` tag. But let's say we wanted to do that programmatically with jQuery:

```js
$("p").addClass("myBorder").
```

We use `$("p")` as our selector to select the `p` tag, and then we call the `addClass` function, and pass it the paramater `"myBorder"`.

Our resulting HTML will look like this:

```html
<p class="myBorder"> This is my paragraph</p>
```

### Val
Let's say you're building a form for an online order. Typically, you give your user an option to check if their shipping address is different than their billing address. If they click the box that they are different addresses, then they would expect an additional form to fill out for shipping address. In order to achieve this, you would want to check the `value` of the checkbox, and trigger the form to be filled out if it is checked with the `val` function.
The `val()` function returns the `value` attribute for an HTML element. 

Given the following HTML:

```html
<form>
  <input type="checkbox" value="choice a">Choice A
  <input type="checkbox" value="choice b">Choice B
</form>
```

We can select the value of an input with:
```js
$('input').val();
```

It's important to note that this function returns the very first match, so it would find the first input field and return `"choice a"`. 

We could change our selector to look for the selected checkbox:

```js
$('input:checked').val();
```

If you wanted to change the value of the input to "choice Z" instead of `"choice a"`, you would just pass a parameter to the `val` function:

```js
$('input').val("choice Z");
```

## CSS Methods

This group of jQuery methods deals with retrieving and setting CSS properties of HTML elements. These methods include `addClass`, `hasClass`, `removeClass`, `width`, `scrollLeft`, and many more.

## hasClass

If you wanted to trigger an event based on a class already set on a property, you could use `hasClass` to check if that class exists. If it does, it will return `true`.

Given the following HTML

```html
<ul class="favList">
  <li>Chocolate</li>
  <li>Puppies</li>
  <li>Gold</li>
</ul>
```

We could check if this list has the class `favList` by passing it as an argument to `hasClass`:

```js
$('ul').hasClass('favList')
```

## Effects

We can use jQuery to add special effects (like animations) to our web page.

### animate

The animate function allows you to create a custom animation on any HTML element. The function accepts a CSS object as a parameter.

Let's say we have an image of a bird on our website that we want to get bigger, we could achieve that with the animate function:

HTML:
```html
<img src="images/bird.png">
```

jQuery:
```js
$('img').animate({
  height: '500px'})
```

### fadeOut

The `fadeOut` function makes the select elements the function is called on opaque.

Let's take the bird image again:

```html
<img src="images/bird.png">
```

We could make the bird disappear by using fadeOut. This function accepts a parameter of the amount of time in milliseconds for the item to fade:

```js
$('img').fadeOut(4000);
```

### fadeIn

Once an item is opaque, you can make it  come back to full visibility with `fadeIn`.

HTML:
```html
<img src="images/bird.png">
```

```js
$('img').fadeOut(4000); //takes 4 seconds to fade image out
$('img').fadeIn(2000); //image back to full visibility in 2 seconds
```
### hide

The `hide` function hides all matched elements.

Let's say we have a paragraph that we want to hide:

```html
<p> paragraph.</p>
```

We easily hide it:

```js
$('p').hide(); // hides the paragraph immediately
$('p').hide(4000); //gradually shrinks and hides the image over 4 seconds
```

### show

The show function makes hidden elements reappear:

```html
<p> paragraph.</p>
```

We easily hide it:

```js
$('p').hide(); // hides the paragraph immediately
$('p').show(); // shows the paragraph immediately

$('p').hide();
$('p').show(4000); // gradually grows and shows the paragraph
```

## DOM Insertion

The methods under this category allow us to insert new content into our site.

### append

The append method adds specific content to the end of the element. 

HTML:
```html
<p> Hey there. This is a short paragraph.</p>
```

To add text to the paragraph, we can use the `append` function and pass it a parameter of the content we want to add to the end of the p tag:

```js
$('p').append("Now the paragraph is a little bit longer because I am adding text to it with jQuery");
```

Now our HTML looks something like this:

```html
<p> Hey there. This is a short paragraph.Now the paragraph is a little bit longer because I am adding text to it with jQuery</p>
```

## Instructions
You'll be coding your solutions in `js/methods.js`. There are tests to run to make sure you're solutions work as expected. Styling is defined in `css/style.css`. You can test your code in the console by opening up `index.html` in the browser.

+ Create a function `fancySchmancy` which does not accept any parameters. The function should use the `addClass` function to add the class `iAmFancy` (defined in `css/style.css`) to the `p` tag with the ID `bacon`. The function should return the `p` tag.

+ Create a function `addText` which accepts a string as a parameter. The function should append the parameter to the 2nd paragraph. The function should return the `p` tag.

+ Create a function `showDolphin`, which shows the hidden image of the dolphin, using the `show` function. The function does not need to have a return value.

+ Create a function `hideImage` which hides the gif of a man getting hit in the face with a pie. The function does not need to have a return value. 


+ Create a function `fadeIt` which uses `fadeIn` to show the div with the list of favorite snacks. The function does not need to have a return value.

+ Create a function `fadeItOut` which hides the second paragraph using the `fadeOut` function. You'll need to pass `0` to the `fadeOut` function so that the image fades immediately. Otherwise, you'll have issues with the tests. The function does not need to have a return value.

+ Create a function called `findItByClass` which accepts a string of a jQuery selector as a parameter. The function should use the `hasClass` function to check if the `a` tag has the class `flatironLink`. The function should return the evaluation of the `hasClass` function.

+ Create a function called `formValue` that does not accept any parameters. The function should use the `val` method to retrieve the value of the last `input` tag. The function should return the value of the `value` attribute

## Resources

+ [jQuery Attribute Methods](https://api.jquery.com/category/attributes/)
+ [jQuery CSS Methods](https://api.jquery.com/category/css/)
+ [jQuery Effects Methods](https://api.jquery.com/category/effects/)
+ [jQuery DOM Insertion Methods](http://api.jquery.com/category/manipulation/dom-insertion-inside/)

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/js-jquery-methods-readme' title='jQuery Methods'>jQuery Methods</a> on Learn.co and start learning to code for free.</p>

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/js-jquery-methods-readme'>jQuery Methods</a> on Learn.co and start learning to code for free.</p>

<p class='util--hide'>View <a href='https://learn.co/lessons/js-jquery-methods-readme'>jQuery Methods</a> on Learn.co and start learning to code for free.</p>
