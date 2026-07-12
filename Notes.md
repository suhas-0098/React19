Why React.js?
-------------

React is the most popular javascript library for building user interfaces.
componenet based architecture
declarative UI
Rich Ecosystem - npm packages 
Strong Community Support - Online/Github 


React 19 in vite
-----------------
- npm create vite@latest
- project name > select a framework > select a variant 
- cd project 
- npm install 
- npm run dev 

command to check update 

- npx npm-check-updates


Prerequisite to learn React.js
-------------------------------
HTML
CSS
JS 

Naming Conventions
-----------------
camelCase
PascalCase
snake_case
kebab-case 

What is JSX ?
-------------
JSX stands for JavaScript XML. It allows you to write HTML elements in JavaScript and
place them in the DOM without any createElement() and appendChild() methods.

React Component ?
-----------------

In React a component is essentially a Javascript function or class that returns JSX (JavaScript XML),
a syntax extension that allows you to write HTML-like code inside JavaScript.
Component are the building blocks of any React application, allowing for creation of complex and interactive 
user interfaces through the assembly of isolated, reusable pieces.

You can also use .js extension with React.js components but 
it's recommended to use .jsx to differentiate between regular javascript Files and React.js components.

There are two ways to create components in React.js: 

- Class Based components
  This is how components were created before functional components

  export class Welcome extends Component{
  render(){
    return <h1>Hello, {this.props.name}!</h1>
  }
}

- Functional components
  This is modern and recommmended way of writing React.js components.

  export function Welcome({name}){
  return <h1>Hello , {name}!</h1>
}

React Fragments:
----------------

- In React.js a component can't return multiple elements without a wrapper div.
- You can do this to imitate it : Using an array of elements with keys
- return [<p>Ram</p>,<strong>20</strong>];
- But it's tedious, to fix this React 16 introduced fragments, which allow components to 
  return multiple elements without adding extra nodes to the DOM.
- import {  Fragment } from "react"
  return <Fragment></Fragment>
- Alternatively, you can also use its shorthand syntax : 
- <>..... </>

Q: why can't we return multiple elements at the same time?

A: As after JSX is compiled it is converted to normal javascript object, 
you can't return multiple javascript object at the same time 

Dynamic values in JSX
----------------------
- you can add any variables of your component in JSX using {} syntax.

- function MyComponent(){
    const value ="Hey";
    return <p>{value}</p>;
  }

- JSX allows you to write javascript expressions inside curly brace includes operations, 
function calls, and other javascript expression produce a value.

- return <div>The result is : {1+2+3}</div>;


Conditionals values in jsx
--------------------------
- you can either return a JSX early or you can use ternary
  operators for conditionals in JSX

- return <p>{age>=18?"Adult":"Minor"} </p>
- return <p>{age>=18 && "You can vote"}</p>
- return <p>{username || "Guest"}</p>


Import Export in Reactjs
-------------------------
1. Default Export and Import
2. Named Export and Import
3. Mixed Export and Import 


Default Export : A file can have only one default export.
Default Import : When importing a default export, you can name the import whatever you like 

Named Export : A file can have multiple named exports.
Each named export must be explicityly exported.

Named Import : 
When importing named exports, the import names must match 
the export name exactly. Named imports must be enclosed in curly braces.


Looping in JSX
---------------
- we don't have for loops in JSX, so we have to use 
.map() method of arrays.

return (
  <ul>
  {students.map((student)=>(
    <li key = {student}>{student}</li>
  ))}
  </ul>
);

- React.js will complain if you don't pass key prop to <li>


Props:
-----

- React props(properties) facilitate data transfer from parent to child components.

- Data flows unidirectionally, ensuring a clear direction of information in react applications

- Props are immutable, meaning child components cannot modify the data received from parents.

- Child components access props through their function parameter

- You can also pass JSX as props to another component 

index.css 
----------
This file contains global css styles that apply to the entire application. 
It allows you to define styles that should be applied globally, affecting all components within the app 


CSS conditional stylings in react js:
-------------------------------------

you can use ternary operators to add conditional stylings to CSS.

CSS Modules:
------------

- Everytime you import a CSS file in your react component, they are regarded as global CSS.

- CSS Modules help you keep styles specific to the component they're used in.

- Each module encapsulates its styles, preventing unintended style conflicts with other modules.

- The class names in CSS modules are often automatically generated 
reducing the likelihood of naming clashes.

CSS Modules - Rules to Keep in Mind
-------------------------------------

- Name your CSS module files with the .module.css or .module.scss extension.

- Import the CSS module file in your React component.
  Access class names as properties of the imported styles object.

- Access class names as properties of the imported styles object.

- Combine multiple class names using template literals or the class library.

- Dynamically apply class names based on component state

- When using CSS Modules, class names with hyphens can sometimes cause issues if not acccessed correctly.
In CSS modules, you need to use bracket notation for class names with hyphens.

- <div className={styles['card-content']}>


Styled-Components:
-------------------

styled-components is a popular JavaScript library for React and React Native that uses a 
CSS-in-JS approach to let you write actual CSS code directly inside your JavaScript files.

using Template literals:

const Button = styled.Button`
color:grey;
`;

using Style objects:

const Button = styled.button({
  color:grey,
});

- In styled-components, you can pass a function within the template literal 
to dynamically set CSS properties based on props or state.

Events Handling:
----------------

- Event handling in React.js is the process of capturing and responding to user interactions, such as clicks, keystrokes, or form submissions, within a React application. Event handling in React follows a similar pattern to standard JavaScript event handling but with some key difference, such as using synthetic events for cross-browser compatibility and providing consistent event handling across different elements and browsers.

- What is SyntheticBaseEvent in React?

When  you handle events in React, like clicking a button or typing in an input box, React wraps native browser events in something called a SyntheticEvent.

- Here are some widley used React.js events:

1. onClick  : Triggered when an element is clicked.
2. onChange : Triggered when the value of an input element changes.
3. onSubmit : Triggered when a form is submitted.
4. onMouseEnter : Triggered when the mouse pointer enters an element.
5. onMouseLeave : Triggered when the mouse pointer leaves an element.
6. onKeyDown : Triggered when a key is pressed down.
7. onKeyUp   : Triggered when a key is released.
8. onFocus   : Triggered when an element receives focus.
9. onBlur    : Triggered when an element loses focus.
10.onInput   : Triggered when the value of an input element is changed.

- Event Naming Conventions :

camelCase : Events names in JSX should be written in camelCase.
for example, onClick, onChange, onSubmit.

Prefix with 'on': Event handlers should be prefixed with "on".
for example, onClick, onMouseEnter.

- Function Naming Conventions :

Prefix with 'handle' : it is a common convention to prefix event handler functions with "handle" to clearly indicate their purpose. For example, handleClick, handleChange, handleSummit.


Passing event handlers as props:
-------------------------------

- Passing event handlers as props in React.js is a common pattern used to allow child components to communicate with parent components. This pattern is useful in various scenarios, including: 

- Form Handling: Passing event handlers like onChange or onSubmit to form components allows the child components to update the form data and notify the parent component of changes.

- User Interaction : Event handlers like onclick can be passed to interactive elements(eg. buttons, links) to trigger specific actions in the parent component, such as opening a modal or navigating to a different page.

- State Management : Event handlers can be used to update state in the parent component, which can then be passed down to child components as props to reflect the updated state

- Callback Functions : Event handlers can be used as callback functions to handle asynchronous operations or to update state based on the result of an operation.


Event Propagation(journey of an event):
------------------

- Event propagation refers to the process of how events 
propagate or travel through the DOM(Document Object Model) hierarchy.

- In javascript, there are two phases of event propagation : capturing phase and bubbling phase

- Capturing Phase : 
The event starts from the root of the DOM and goes down to the target element.

- Target Phase : The event reaches the target element.

- Bubbling Phase : 
  The event starts from the target element and bubbles up to the root of the DOM.

- In React.js, event propagation refers to the process by which events propagate or "bubble" up from the target element through its parent elements in the DOM hierarchy. React follows the same event propagation model as regular javascript DOM events.

- When an event occurs on an element in a React component, such as a button click, the event is first captured at the target element and then bubbles up through the parent elements, triggering any event handlers that have been defined along the way. This allows you to handle events at different levels of the component hierarchy.

- React Provides a way to stop event propagation using the stopPropagation method which can be called on the event object within an event handler.


State in React.JS:
------------------

- In React, state refers to an object that holds data or information about the component. State managed within the component(just like variable declared in a function). However, unlike regular variables, when state changes, React re-renders the component to reflect these changes keeping the user interface in sync with the data.

- State is dynamic and mutable, meaning it can change over time in response to user actions, server responses, or other events

- syntax : 

const [count,setCount] = useState(0);

const = variable(key)
count = state variable the current state value
setCount = a function that updates the state variable
0 = the initial value of the state

Why do we need state in React?
------------------------------

1. Dynamic UI Updates : State allows your components to update dynamicallly in response to user input of other events. For exmaple, in a form, the state might hold the current value of the input fields, updating in real-time as the user types.

2. Interactivity : State makes your application interactive. By maintaining state, you can create components that respond to user actions, such as clicks, form submissions, or keyboard inputs.

3. Data Management : State helps manage data within a component. For instance, you can fetch data from an API and store it in the state, which will then be used to render the UI.

4. Component Communication : State can be lifted up to parent components to manage state across multiple child components, ensuring consistent data flow and synchroize

How State works ?
-----------------

- In React, state is a way to store and manage data that can change over the lifetime of a component. When state changes, React re-renders the component to reflect the new state. This ensures that the user interface stays in sync with the underlying data.

- React Reconciliation is the process through which React updates the Browser DOM.

- The Diffing Algorithm : Diffing short for differences algorithm is used to differentiate the DOM tree for efficient updates.

Why the state value does not reset to its initial value on re-render?
---------------------------------------------------------------------

The useState hook is smart enough to only use the initial value the very first time of the component renders.

What is Derived State in React?(Improving State Management and Remove Redundancy & Dependency)
----------------------------------------------------------------------------------------------

- Derived state is any state that can be computed based on other state or props. It is not stored directly in the component's state but is calculated when needed. This approach helps avoid duplication and keeps the state simpler and more manageable.

- ex: const userCount = users.length;

- Benefits of Derived State 

- Avoid Redundancy : By deriving values from existing state, you avoid storing redundate data.

- Consistency : Ensures that derived values are always in sync with the underlying state or props

- Simplicity : Reduces the complexity of state management by minimizing the number of state variables.

Lifting the State Up in React:
------------------------------

- Lifting State Up is a pattern in React where you move the state from child components to a common parent component so that multiple child components can share and synchronize this state. This ensures that the state is managed at a higher level in the component hierarchy, allowing data to flow down as props and actions (such as events) to flow up 

- Use Case :
When you have two or more components that need to share the same state, you should lift the state up to their nearest common ancestor. This allows these components to stay in sync and ensures that the state is managed in a single place.

- For updating state of children from parent, you can use concept called Lifting the state up.

- Here, you will lift the state from child to parent then pass that state down using props.


Keys in React.js
-----------------

- A string or a number that uniquely identifies it among other items in that array.

- Keys tell React which array item each component corresponds to so that it can match them up later.
This becomes important if your array items can move
(e.g due to sorting), get inserted, or get deleted.

- Rules :
  - Keys must be unique among siblings
  - Keys must not change


Short Circuit Evaluation in React.js
------------------------------------

- Short circuit evaluation is a technique used in javascript (and many other programming languages)
where expressions are evaluated from left to right.
In logical operations, evaluation stops as soon as the result is determined. This is often used in React to conditionally render components or excecute code based on the truthiness of certain conditions.

- Rules of short circuit evaluation 
- Short circuit evaluation involves logical operators (&&,||,??) and how they evaluate expressions based on the truthiness of their operands.

- Logical OR (||)

- syntax : expression1 || expression2
- rule   : if expression1 is truthy, return expression1.
           otherwise, return expression2.

- eg : const result = false || "Hello"; // Hello
       const result = true  || "world"; // true


- Logical AND (&&)

- syntax : expression1 && expression2
- rule   : if expression1 is falsy, return expression1.
           otherwise, return expression2.

- eg : const result = false && "Hello"; // false
       const result = true  || "world"; // world

- Nullish Coalescing (??)

- syntax : expression1 ?? expression2
- rule   : If expression1 is not null or undefined,     return expression1, otherwise, return expression2

- eg : const result = null ?? 'Hello'; // Hello
       const result = undefined ?? 'World' // World
       const result = ""?? 'Fallback'; //""


React Hooks Rules:
------------------

- Hooks let you use different React features from your components.

- It starts with use 

- eg : useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef, useLayoutEffect, useDebugValue, useImperativeHandle

- Hooks can only be used at the top level of your component.

- Do not call Hooks inside loops, conditions, or nested functions.

- Call Hooks only from react function components or custom hook. Do not call Hooks from regular javascript functions or in class components.

- You can also create your own custom hooks by creating functions startingn with "use" ensures that react can identify it as a Hook.( useFetch, useForm)

- Ensure Hooks are called in the same order.

Controlled Components:
----------------------

- Controlled components in React are those where form data is handled by React component state.

- This means :

- State Management : The value of the input field is controlled by React state (useState or this.state in class components).

- Event Handlers : Changes to the input field (like typing into a text field) are handled by React event handlers (onChange, onBlur, etc)

- State Updates : When the user interacts with the form input, React state is updated the event handlers, and the input value reflects the current state value.

- Pros:

- React has complete control over the input values, making it straightforward to implement features like validation and conditional formatiing based on state.

- Easier to handle form submission and integration with React's lifecycle methods.

- Enables clear data flow and centralized state management within React components.

- Cons:

- Requires more code compared to uncontrolled components due to state management.

- Can lead to more re-renders if not optimized, although React handles this efficiently cases.

UnControlled Components:
------------------------

- Uncontrolled components in react are those where form data is handled by the DOM itself.

- This means:

- Direct DOM Manipulation : The value of the input field is controlled by the DOM(documenet.getElementById,etc.). It's not declarative way right.

- Event Handling : Changes are directly handled by DOM events (onChanges, onBlur, etc)

- Accessing Form Data : Form data is accessed through refs or DOM traversal methods, not through React state.


useEffect Hook:
---------------

- The useEffect hook in React is used for handling side effects in functional components.

- syntax : 

  useEffect(()=>{
     // your side effect code here

    return ()=>{
    // Cleanup code here (optional)
    };
  },[dependencies]);

1. Initial Render : When the componenet mounts, useEffect can run its effect function to perform operations like data fetching.

2. Dependencies : The second argument, an array of dependencies, which determines when effect should re-run. If any value in this arrray changes, the effect will re-run

3. Cleanup : useEffect can return a cleanup function to clean up after the effect , such as unsubscribing from an event or clearing a timer.

4. A side effect is any operation that affects something outside the scope of a function(Pure function). In React, side effects are managed using hooks like useEffect to ensure they are handled in a controlled and predictable mananer. This includes tasks like :

  - Fetching data as a side effect
  - When you fetch data in a react component, you're performing a side efffect because : 
  - External interactions: You're interacting with an external data source, such as an API or a server.
  - State Updates: The fetched data will usually update the component's state, causing a re-render.
  - Subscribing to or unsubscribing from a service.
  - Updating the browser's DOM
  - Logging data to the console
  

useRef() Hook:
--------------

- useRef is a React Hook that lets you reference a value that's not needed for rendering.

- Unlike states, it's directly mutable.

- You can access value of it's using yourRef.current;

- Uncontrolled Components :

- Uncontrolled components manage their own state internally and are typically refs.


forwardRef():
-------------
- React forwardRef allows parent components to move down (or forward) refs to their children. It gives a child component a reference to DOM entity created by its parent component in React. This helps the child to read and modify the element from any location where it is used

syntax : React.forwardRef((props,ref)=>{})

useId():
--------

- useId is a React Hook for generating unique IDs that can be passed to accessibility attributes. It helps to ensure that each instance of a component gets a unique ID, which is useful for associating labels with input fields and other elements

- Syntax : const id = useId()

- Parameters : useId does not take any parameters

- Returns    : useID returns a unique ID string associated with this particular useId call in this particular component.

- Note : useId should not be used to generate keys in a list

Prop Drilling in React JS:
--------------------------

- Props drilling is a pattern in React where you pass data from a parent component to deeply nested child components through multiple layers of components, even if some of the intermediate components don't need the data

- As your component tree deepens, prop drilling can make the code more complex and harder to maintain

- Passing upto 1 or 2 levels is probably fine but might to harder to maintain more than that.

- When a prop needs to be passed through many levels, making changes to the component hierarchy or adding/removing props can become cumbersome.

- Prop drilling may result in boilerplate code as each intermediate component needs to accept and pass down the props even if it doesn't use them.

ContextAPI:
------------

- Context API : A way to pass data through the component tree without having to pass props down manually at every level.

- createContext : Creates a Context object.

- Provider      : A component that provides the context value to its children.

- useContext (Consumer) : A hook that allows you to consume a context.

- Initial Value : We don't pass an initial value directly to the context.

- Context Creation : createContext returns a Context component, not a variable. The first letter of the Context component's name must be uppercase.

- Provider Component : The Provider is a property of the Context component. We pass the value to the Provider, which makes it accessible to child components. The value should be passed inside double curly braces {{}} if it's more then one.

- Consuming Context Data : To access the context data, we use the useContext hook. As a parameter, we pass the entire context to useContext to access all values provided by the Provider.

- In the Context API, the data provided by a context can only be accessed by the components that are its children within the component tree. This means that any component that needs access to the context data must be a descendant of the provider component that supplies the context value.

Rules for Custom Hooks :
------------------------

- Creating custom hooks in React is a powerful way to encapsulate logic and make your components cleaner and more maintainable.

1. Prefix with use : Custom hooks must start with the word use. This convention ensures that hooks are easily identifiable and adhere to the hook rules.

2. Use Built-in Hooks : Custom hooks should utilize React's built-in hooks (eg..useState,useEffect,useContext) to leverage React's state and lifecyle features.

3. Avoid side effects outside hooks : side effects (eg. data fetching, subscriptions) should be managed within hooks using useEffect or other appropriate hooks.

4. Keep Hooks Pure : Hooks should be free from side effects and return values or function that the component can use.

useReducer():
---------------
- const [state, dispatch] = useReducer(reducer,initialState);

- It returns an array containing the current state and a dispatch function.

- Dispatch function is used to send actions to the reducer, which in turn updates the state based on teh action's type and any associated data (payload).

- Reducer Function: A function that takes the current state and an action as arguments, and returns a new state.

- Initial State: The initial state value. (The initial state can be a simple value, an object, or even derived from a function if the initialization is complex)


React.memo():
------------

- The React.memo function is used for memoization of functional components.

- If the props of a memoized components have not changed, React skips the rendering for that component, using the cached result instead.

- Do memoizations only when necessary.

OR 

- React.memo() is a higher-order component that we can use to wrap components that we do not want to re-render unless props within them changes

import { memo } from 'react';

const ProductCard = ({ name, price }) => {
  console.log("ProductCard rendered");
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
};

// Export the memoized version
export default memo(ProductCard);


useMemo Hook :
--------------

- const memoizedValue = useMemo( ()=>{

  // Your computation logic here
  return computedValue;

},[dependencies])

- useMemo is a React Hook used for memoization.

- Memoization is a technique to optimize performance by caching the results of expensive function calls.

- Use it when you want to prevent unnecessary re-execution of a function on every render.

- Useful for optimiing performance in situations where calculations or operations are computationally expensive.

- Overusing useMemo might lead to unnecessary complexity and impact readability.
<!-- 
import React, { useState, useMemo } from 'react';

function ProductList({ items }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 1. Memoize the expensive filtering logic
  const filteredItems = useMemo(() => {
    console.log("Filtering items..."); // Only logs when items or searchTerm change
    return items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [items, searchTerm]); // Dependency Array

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search..."
      />
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle Theme
      </button>
      
      <ul>
        {filteredItems.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
} -->

useCallback Hook:
------------------

- The useCallback hook caches a function definition between component re-renders to optimize performance.

import { useCallback } from 'react';

const cachedFn = useCallback(() => {
  // Your function logic goes here
  console.log(dependency);
}, [dependency]); // The dependency array

<!-- import React, { useState, useCallback, memo } from 'react';

// 1. Optimized child component using React.memo
const ShippingButton = memo(({ onClick }) => {
  console.log("Child button re-rendered!");
  return <button onClick={onClick}>Calculate Shipping</button>;
});

export default function OrderForm() {
  const [itemsCount, setItemsCount] = useState(1);
  const [theme, setTheme] = useState('light');

  // 2. Cache the function. It only recreates if itemsCount changes.
  const handleShippingCalculation = useCallback(() => {
    console.log(`Calculating shipping for ${itemsCount} items.`);
  }, [itemsCount]); 

  return (
    <div className={theme}>
      {/* Changing this theme state WILL NOT cause the ShippingButton to re-render */}
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
      
      <p>Items in cart: {itemsCount}</p>
      <button onClick={() => setItemsCount(prev => prev + 1)}>+</button>

      {/* Passing the stable memoized callback function */}
      <ShippingButton onClick={handleShippingCalculation} />
    </div>
  );
} -->


React Router 7 Setup :
----------------------

- What is routing ? why React Router ?

- SPA vs MPA

- Installation of React Router 

 npm create vite@latest
 npm i react-router

- Setup of React project with react-router v7

- Browser Router Setup


Basic Routing :
----------------

- Create Simple components(Home, About,Contact)
- Add createBrowserRouter and RouterProvider
- Navigate between pages using <RouterProvider> and <Link>

Basic Routing - via Navlink :
----------------------------


- Create Simple components(Home, About,Contact)
- Add createBrowserRouter and RouterProvider
- Navigate between pages using <RouterProvider> and <NavLink>

Q1: What is the difference between Link and NavLink in React Router?

A: Both render an <a> tag and perform client-side navigation without a full page reload. The difference is that NavLink is aware of whether its target route matches the current URL and exposes that as an isActive state (also isPending/isTransitioning), letting you style the "current" link differently — e.g., bold text or a highlighted background in a nav bar. NavLink also auto-applies an active class by default. Link has no such awareness — it's used for plain navigation where highlighting the current page doesn't matter.

404 Page and Redirect Page :
----------------------------

- Write 404 HTML
- Add Router
- Redirect Page


Nested Routes :
----------------

- How to create routes inside routes
- Outlet component
- Example : /dashboard/settings, /dashboard/profile

URL Parameters - Dynamic Routes :
---------------------------------

- Create dynamic routes (eg.,/user/:id)
- Read params using useParams
- use case : User profile or product page

{path:"/user/:id",element : <user/>}

export const user = () =>{
   const {id} = useParams();
   return <> user id = {id} </>
}

<Link to="user/101"> user 101</Link>

Route Protection (Private Routes):
----------------------------------

- Create authentication context
- Create ProtectedRoute wrapper
- Use Navigate for redirection

useLocation Hook:
-------------------

- What is useLocation() ?
- When do we use it?
- How to use it? (import, use)
- Location object structure : 
  (pathname,search,hash,state,key)


useSearchParams Hook:
---------------------

- What is useSearchParams() ?
- How to read query params 
- How to set query params
- Example of search / filter component


Laxy Loading & Code Splitting :
---------------------------------

- use React lazy + Suspense
- Code splitting routes
- Optimize large apps with examples
