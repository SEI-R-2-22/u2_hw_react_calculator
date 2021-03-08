# React Calculator With Hooks

![calc](https://cdn.dribbble.com/users/2184773/screenshots/4516857/calculator.gif)

## Overview

Now, it's time for you to check back on everything! You will be building a
calculator with React, and only minimal instructions have been provided for you to really think about what's happening.

At first, your calculator will just add 2 numbers
together when they are typed in. For the bonus, you might decide to get more
creative.

## Getting Started

- `Fork` and `clone` this repository and `cd` into the new directory
- Like usual, use `npx create-react-app hooks-calculator` to make a new project.
- `cd` into your new React app
- Create a `components` folder within the `src` directory to store any components we'll create in this deliverable
- `npm start` to start up your new React app

## Instructions

### Step 1

Start by replacing `App.js` with this component structure:

```js
import './App.css'
function App() {
  return (
    <div className="App">
      <h1>Add With React!</h1>

      {/* Your <Calculator /> component here */}
    </div>
  )
}
export default App
```

Next we'll by create a single `functional` component file in the `components` directory, and name it
`Calculator.js`.

- In this file, create your `Calculator` as a functional component.
- Add the following JSX to the return of your Calculator component:

```jsx
<div className="container">
  <div className="add">
    <input type="text" placeholder="Enter a number" />
    <span>+</span>
    <input type="text" placeholder="Enter a number" />
    <button>=</button>
  </div>
  <h3 className="results">Addition results go here!</h3>
</div>
```

- If you want a quick CSS snippet to make your app more visible, you can find it here:
- <details><summary>App.css</summary>

  ```css
  body {
    background-color: rgb(136, 255, 182);
  }

  .App {
    text-align: center;
  }

  input,
  button {
    border: none;
    font-size: 1.2em;
    border-radius: 0.25em;
    padding: 0.5em;
    outline: none;
  }

  button,
  h1 {
    background-color: rgb(37, 37, 37);
    color: white;
    font-weight: bold;
    box-shadow: 0px 0px 5px black;
  }

  button:active {
    box-shadow: none;
  }

  input:focus {
    box-shadow: inset 0px 0px 6px rgb(175, 0, 73);
  }

  input {
    box-shadow: inset 0px 0px 3px black;
    width: 8em;
  }

  h1 {
    padding: 0.5em;
    margin-top: 0;
    margin-bottom: 2em;
  }

  button {
    padding: 0.5em 1.5em;
  }

  .add {
    display: flex;
    justify-content: space-around;
  }

  .add > span {
    font-size: 2em;
    font-weight: bold;
  }

  .container {
    width: 30em;
    margin: 0 auto;
    background-color: rgb(173, 208, 255);
    padding: 2em;
    border-radius: 0.5em;
    box-shadow: 0px 0px 5px black;
  }

  .results {
    background-color: white;
    padding: 2em;
    width: 21em;
    margin: 1em auto 0 auto;
    border-radius: 0.25em;
    box-shadow: inset 0px 0px 3px black;
  }
  ```

  </details>

- Make sure to `import` your `Calculator` component into `App.js`!

### Step 2

Set up the initial state of your `Calculator` component with `useState`. Don't forget you'll need to import it from React!

- What state will you need to track?
- What values should those state items start with?
- Where is that state displayed in the browser?

> Hint: Think about creating state variables for the first number, second number, and result to start. An empty string `""` might be a good place to start, since we're using 'text' inputs for our numbers.

### Step 3

You will want to trigger a function when the values in your text inputs change. You can capture these values by writing a function in your `Calaculator` component that fires within an anonymous function `() =>` in the input's `onChange` property. Let's say I have a text input tracking my first number.

```jsx
<input
  type="number"
  name="num1"
  placeholder="Enter your first number"
  value={someStateVariable}
  onChange={(e) => handleNum(e, 'num1')}
/>
```

I want to store this number as part of my state. Let's say I decided to call it `num1`. Within the function that I've defined in my `Calculator` component above the return I could set my state like so:

```js
const handleNum = (e, num) => {
  console.log(num)
  console.log(e.target.value)
  // CONDITION
  // If num is num1:
  //   set num1 to e.target.value
  // Otherwise
  //   set num2 to e.target.value
}
```

> Hint: Remember to use proper state setting functions for state variables. 
>
> For example, if I had a useState() variable `const [result, setResult] = useState('')`, I would update its state with something like the following: `setResult(someNewStringValue)`

If you decided to use buttons for your calculator, you probably want to use `onClick` instead of `onChange`, but the concepts are the same! Here is some additional documentation on React's forms and event handling:

- [React form documentation](https://facebook.github.io/react/docs/forms.html)
- [A list of events React supports](https://facebook.github.io/react/docs/events.html#supported-events)

### Step 4

Once you've got your event handlers set up to capture the nubmers from your **text** inputs, you'll need to create function that calculates the final result when the `=` button is clicked. Example:

```js
const handleSolution = () => {
// If num1 and num2 are not empty strings 
//   here would be a good place to:
//   declare a variable equal to the arithmetic sum of num1 and num2
//   since they are strings, a method like parseInt() may be useful here
//   set the state of the result to the arithmetic sum of num1 and num2

// After setting the result state, you could clear the state of num1 and num2
// by setting them back to empty strings

// If you want to continue using the result that was just calculated above
// Maybe you could just clear num2
// And set the state of num1 to the result that was just calculated

...
<button onClick={() => handleSolution()}>=</button>
}
```

### Step 5

Once the state of the `result` has been set, React will re-render the whole
component. Make sure you have a place in your JSX that displays the result!

## Requirements
- `state` used with `useState` to create the initial state for the `Calculator` component
- Numbers must both come from **text inputs** and be added _arithmetically_, not as joined strings
- A result from both numbers being added together must display on the page after the `=` button is clicked
- The result must be equal to the sum of both numbers from the text inputs

## Bonus
- Add in logic that prevents the solution from being calculated if users do not enter a number in the text inputs
- Make the calculator work with any of the 4 basic arithmetic operations (`+`, `-`, `*`, `/`). 
- How will this change your `state` and your JSX? HINT: A state variable for an `operator` may be useful here.
- Try implementing a solution _without_ a `useState` variable for the result, using only the two number states.

## Submission Guidelines

- Pull Request must be submitted utilizing these guidelines: [PR Guidelines](https://github.com/SEI-R-1-25/template_pull_request)

## Resources

- [React State Intro Lesson](https://github.com/SEI-R-1-25/u2_lesson_react_state_intro)
- [React Todo List Lab](https://github.com/SEI-R-1-25/u2_lab_react_todos)
- [React Lifecycle Methods Lesson](https://github.com/SEI-R-1-25/u2_lesson_react_lifecycle)
