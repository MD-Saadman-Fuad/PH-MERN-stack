
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById returns a single element of the id given, so if you have multiple id of the same name, itwill only return 1, not all.

getElementByClassName returns a live HTMLCollection of all elements with the given class name. so you can iterate it using a for loop and access the elements one by one. or you can also access specific index if you know where your desired element is.

querySelector gives the 1st element of the given CSS, so the 1st occurance of the CSS is caught by this.

querySelectorAll returns a NodeList of all elements having the same CSS.  

2. How do you create and insert a new element into the DOM?
from my code
get the id where you want to add it using document.getElementById

create the element that you want to add 
using createElement(`element tag`)
elementtag.innerHTML = `Add necessary html`
add it to the parent div as a child

3. What is Event Bubbling and how does it work?
Event bubbling is when an event starts at the deepest target element and goes up to its parents one then to his parent and so on. For example, clicking a button inside a div will trigger the button click event, then the div click event, then the body.



4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is attaching a single event listener to a parent element to handle events for its child elements. Its useful for handling events on dynamically added elements and improving performance by reducing the number of event listeners.

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() - Prevents the default browser action like submitting a form. normally when a form i submitted it gets erased but if we add preventDefault(), it will not happen as the default action is turned off.

stopPropagation() - this stops the event bubbling from going up the tree