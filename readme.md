# Angular Calculator

Your goal is to create a calculator using Angular. Starter code has been provided for you.

## Getting Started

* Fork and clone this repository
* Run `npm install` to install dependencies
  * `npm start` to run the BrowserSync server
  * `npm run lint:js` to lint your JS
  * `npm run lint:css` to lint your CSS

** The calculator should function as follows:**

* Calculator should start with a 0 value
* If a number is pressed it should overwrite the 0 with that number
* If a subsequent number is pressed it should be appended to the end
* When pressing an operator (+, -, x, ÷) there should be no apparent change.
* When entering a new number the screen should clear and be replaced by that new number
* Again, each subsequent number should be appended.
* When another operator (or equal) is pressed it should total the values and update the screen (and be ready for the next operation)
* If a number is entered without an operator being pressed first it should clear the screen / memory and that new number should become the running total
* Pressing clear should revert it back to 0

For an example of how the calculator should function see the built in OSX calculator (go to spotlight search CMD+SPACE, "calculator", and hit enter)

## Suggested Process

* Add ng-app / module (test with console.log)
* Add ng-controller / controller (test with console.log)
* Bind display to `$scope` variable
* Get buttons to update display
* Get clear button to clear display
* Work on getting operators working

## And Then...

* Highlight the active operator key using `ng-class`
* Add decimal point button
* Add a positive / negative button
* Add memory / recall buttons

### Reverse Polish Notation

Reverse polish notation is a different take on the calculator you know and love today. Instead of typing "5 x 4" to get 20, you would instead type "5 4 x". This principle involves utilizing a stack in which you push numbers onto. This stack follows the "first in, last out" methodology whereas numbers typed, or solutions to previous calculations, are pushed into the stack for later use. This allows for more complex calculation to occur without the need of pen & paper.

[Numberphile on Youtube](https://www.youtube.com/watch?v=7ha78yWRDlE) has a very bit-sized explanations for anything number related. Be sure to check out the video before begining the tackle of RPG

> For more information, be sure to check out the  [Wikipedia page](https://en.wikipedia.org/wiki/Reverse_Polish_notation).

> If you have an android device, check out "RPN Calculator" by *Andrew Naoum*. Similar apps should exist for iOS as well.

Now that you are familiar with Reverse Polish Notation, try converting your calculator to *RPN* by utilizing an array. What kind of array methods would you use for a first-in-last-out stack?

---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
