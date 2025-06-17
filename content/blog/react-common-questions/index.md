---
title: "React Common Questions: A Comprehensive Guide"
date: "2025-06-16"
category: "Software Engineering"
tags: ["react", "hooks", "performance"]
featuredImage: "./pexels-goumbik-574071.jpg"
featuredImageAlt: "A left hand typing on a laptop"
featuredImageCreditText: "Christopher Ayme"
featuredImageCreditLink: "https://unsplash.com/photos/ocZ-_Y7-Ptg"
---

If I had a dollar for every time I got asked a **React question in an interview**, I’d probably have enough for a lifetime supply of coffee, which is—let's face it—fuel for coding. Over the years, I’ve noticed the same questions keep popping up—whether I’m being interviewed or helping others prep. To save everyone time, I’ve put together this guide. Think of it as my personal React FAQ, enjoy!

---

## 1. What is React and Why Use It? {#react}

**React** is an open-source [JavaScript](/g/JS) library developed by Facebook for building [user interfaces](/g/UI), especially [single-page applications (SPAs)](/g/SPA). It allows developers to create large [web applications](/g/web-app) that can _react_ to data changes and render efficiently.

**Why use React?**

- **Component-Based Architecture:** Breaks UI into [reusable components](#components).
- **Declarative Syntax:** Makes code more predictable and [easier to debug](#debug).
- **Virtual DOM:** [Efficiently updates](#vdom) and renders components.
- **Strong Ecosystem:** Rich set of tools, libraries, and community support.
- **Single-Page Applications (SPAs):** Smooth navigation without full page reloads.
- **Static Deployment:** Static files deployed to [CDNs](/g/CDN) for scalability and performance.

---

## 2. What is the Virtual DOM (VDOM) {#vdom}

The [VDOM](https://legacy.reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom) is a lightweight, in-memory representation of the real [DOM](/g/DOM). After a state or prop change, React "diffs" (compares) the old and new VDOM to determine the minimal set of updates to the actual DOM, which is slow to update directly. That is called [reconciliation](https://legacy.reactjs.org/docs/reconciliation.html).

---

## 3. What is JSX? {#jsx}

[**JSX**](/g/jsx) stands for JavaScript [XML](/g/XML). It is a syntax extension for JavaScript recommended for use with React (and similar frameworks) to describe the UI. A gross aproximation is that JSX is "HTML in JS" (although technically incorrect).

<!-- TODO: link "similar frameworks" to another FAQ -->

**Example:**

```jsx
const element = <h1 className="greeting">Hello, world!</h1>;
```

Note 1: JSX uses `camelCase` property names (e.g., `colSpan`) and `className`/`htmlFor` for the HTML attributes `class`/`for`, since these are JavaScript [reserved words](/g/reserved-word).

Note 2: JSX is [syntactic sugar](/g/syntactic-sugar) for `React.createElement()`. Tools like Babel [transpile](/g/transpilation) it to regular JavaScript, which browsers can then read.

**Example Above Transpiled:**

```js
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
```

---

## 4. What are Components? {#components}

Components are the **building blocks** of React. They encapsulate logic, structure, and [styling](#styling), making code modular and reusable. There are two types of components:

- **Class Components:** [ES6](/g/ES6) classes that extend `React.Component`, have state, lifecycle methods, and more verbose syntax. Still used in legacy code.
- **Functional Components:** JavaScript functions that return [JSX](#jsx), use [hooks](#hooks) for state and lifecycle events and have simpler syntax. Modern way of writing React.

**Example:**

```jsx
// Class component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// Function component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Usage (both)
<Welcome name="Alice" />;
```

---

## 5. What are Props? {#props}

**Props** (short for "properties") are read-only inputs passed from parent to child [components](#components). They enable [unidirectional data flow](#data-flow) through the component tree. See [prop drilling](#prop-drilling).

**Example:**

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Greeting name="Alice" />;
```

---

## 6. What is State? {#state}

**State** is a built-in object created via the `useState` [hook](#hooks) that adds data to a [component](#components). The state setter schedules an update and subsequent re-render. The **functional update** form (`setCount(c => c++)`) avoids stale state issues with rapid/batch renders.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count => count + 1)}>Click me</button>
    </div>
  );
}
```

---

## 7. What are Hooks? {#hooks}

**Hooks** are functions that add [state](#state) and [lifecycle methods](#use-effect) to [functional components](#components). They were introduced in [React 16.8](https://github.com/facebook/react/releases/tag/v16.8.0). The most common hooks are:

- [`useState`](#state): Adds state to functional components.
- [`useEffect`](#use-effect): Performs side effects (e.g., data fetching).
- [`useRef`](#use-ref): Keeps references across renders.
- [`useContext`](#context-api): Accesses context values.
- [`useMemo`](#performance): Caches expensive calculations.
- [`useCallback`](#performance): Caches callback functions.
- [`useReducer`](#use-reducer): Manages complex state with a reducer.

---

## 8. What is the `useEffect` Hook? {#use-effect}

`useEffect` runs **side effects**, such as data fetching, event subscriptions, timers, or [DOM](/g/DOM) manipulation. It introduces [lifecycle methods](#components) to functional components via the **dependency array**:

- `[]`: Once on mount (first render)
- `[dep]`: When `dep` changes
- Omitted: After every render

The return function runs cleanup on unmount (e.g., unsubscribing or clearing timers):

```jsx
useEffect(() => {
  const id = setInterval(doSomething, 1000);
  return () => clearInterval(id); // On unmount
}, []); // On mount
```

Fetch data **inside `useEffect`** to avoid stale props/state:

```jsx
useEffect(() => {
  async function fetchData() {
    const response = await fetch(`/api/data/${userId}`);
    setData(await response.json());
  }
  fetchData();
}, [userId]); // 'userId' prop/state
```

---

## 9. What is the `useRef` Hook? {#use-ref}

`useRef` returns a mutable ref object whose `.current` property **persists across renders**. Common uses include storing timer IDs and direct access to the [DOM](/g/DOM).

**Example:**

```jsx
const inputRef = useRef();

function focusInput() { inputRef.current.focus(); }

<input ref={inputRef} />
<button onClick={focusInput}>Focus</button>
```

---

## 10. How Does Data Flow in React? {#data-flow}

React uses **one-way data flow** (unidirectional data flow), from parent to child via [props](#props). Pass a **callback function** as prop to update data in the parent. See [lifting state](#lift-state).

**Example:**

```jsx
function Parent() {
  const [value, setValue] = useState("");
  return <Child onChange={setValue} />; // 'setValue' is a callback
}

function Child({ onChange }) {
  return <input onChange={e => onChange(e.target.value)} />;
}
```

---

## 11. What is Lifting State Up? {#lift-state}

"Lift" the state up to the **nearest common ancestor** to share state between multiple child components via props. See [prop drilling](#prop-drilling) and [context API](#context-api).

**Example:**

```jsx
function Parent() {
  const [sharedValue, setSharedValue] = useState("");

  return (
    <>
      <ChildA value={sharedValue} onChange={setSharedValue} />
      <ChildB value={sharedValue} />
    </>
  );
}
```

---

## 12. What is Prop Drilling? {#prop-drilling}

**Prop drilling** occurs when props pass down through many layers of components, even if only the deepest child needs it. Use the [Context API](#context-api) or [state management libraries](#redux) instead.

**Example:**

```jsx
function Grandparent({ user }) {
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <div>Hello, {user.name}!</div>;
}

// 'user' is passed through every level, even if only Child needs it.
```

---

## 13. What is the Context API? {#context-api}

The **Context API** shares values between components without passing props manually at every level. It replaces [prop drilling](#prop-drilling). Common uses include themes, user info, and app settings.

**Example:**

```jsx
const ThemeContext = React.createContext("light");

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Button</button>;
}
```

⚠️ **Common Issue:** Overusing context or storing large, frequently changing objects triggers unnecessary re-renders. Use only for global, stable values. See [performance](#performance).

---

## 14. What is Redux? {#redux}

**Redux** is a state management library often used with React for managing complex state in large applications in a predictable way. It consists of:

- **Store:** Holds the state.
- **Actions:** Describe state changes.
- **Reducers:** Specify _how_ state changes.

**Example:**

```jsx
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch({ type: "INCREMENT" })}>
      Count: {count}
    </button>
  );
}

// Store/reducer not shown
```

---

## 15. What is `useReducer`? {#use-reducer}

**`useReducer`** manages complex state in large applications. It is an alternative to [Redux](#redux) and other state management libraries.

**When to use `useReducer`:**

- When state logic is complex or involves multiple sub-values.
- When the next state depends on the previous state.
- When you want to group related state updates together.

**Example:**

```jsx
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}
```

**Summary:**  
Use `useReducer` for state that is complex, deeply nested, or when you want to centralize state updates in one place.

---

## 16. How to Handle Forms in React? {#forms}

React handles forms using [controlled components](#25-what-are-controlled-vs-uncontrolled-components), where form data is handled by the component's state.

**Example:**

```jsx
function MyForm() {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    alert("Submitted: " + value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 17. What are Controlled vs Uncontrolled Components? {#controlled}

- **Controlled:** Form data is handled by React state.
- **Uncontrolled:** Form data is handled by the DOM.

**Controlled Example:**

```jsx
<input value={value} onChange={e => setValue(e.target.value)} />
```

**Uncontrolled Example:**

```jsx
<input ref={inputRef} />
```

---

## 18. What are Keys in React Lists? {#keys}

Keys help React identify which list items have changed, are added, or are removed. They should be unique and stable, such as IDs.

**Example:**

```jsx
const items = ["A", "B", "C"];
const list = items.map(item => <li key={item}>{item}</li>);
```

---

## 19. What Are the Main Performance Issues in React? {#performance}

- **Unnecessary Re-Renders:** Caused by [unmemoized](#use-memo) function/object props, large objects in [context](#context-api), or non-unique/unstable [`key`s in lists](#keys).
- **Slow Rendering/Sluggish UI:** Caused by large/deeply nested trees, [unvirtualized](https://github.com/bvaughn/react-virtualized) lists/tables with ~1,000s of items/cells, or [CPU-intensive calculations](#use-memo) in the main thread.
- **Long Initial Load Time:** Loading too much code up front.

---

## 20. What is Server-Side Rendering (SSR)? {#ssr}

**SSR** renders React components **on the server** and sends [HTML](/g/HTML) to the client. This improves [SEO](/g/SEO) and initial load performance. Frameworks like [Next.js](/g/nextjs) make SSR with React easy.

---

## 21. How to Test React Components? {#testing}

- **React Testing Library:** For [unit](/g/unit-test) and [integration](/g/integration) testing.
- **Cypress:** For [end-to-end (E2E)](/g/e2e-test) testing in the browser.
- **Playwright:** For cross-browser E2E testing and automation.

**Example with React Testing Library:**

```jsx
import { render, screen } from "@testing-library/react";

function MyComponent() {
  return <div>Hello, world!</div>;
}

test("renders greeting", () => {
  render(<MyComponent />);
  expect(screen.getByText(/hello/i)).toBeInTheDocument();
});
```

---

## 22. What is an Error Boundary? {#error-boundary}

Error boundaries are React components that catch [JavaScript](/g/javascript) **errors in their child component tree** and display a fallback [UI](/g/UI). This is still a primary use case for [class components](#components).

**Example:**

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

---

## 23. How to Style React Components? {#styling}

- **CSS Modules:** Scoped [CSS](/g/css) files to avoid class name clashes.
- **Styled Components:** [CSS-in-JS](/g/css-in-js) for dynamic, component-level styles.
- **Inline Styles:** `style` prop for quick, simple styles (no pseudo-selectors/media queries).

---

## 24. How To Debug React Applications? {#debug}

- **React Dev Tools:** Inspect the [component tree](#components), [props](#props), [state](#state), and re-renders.
- **Console Logging:** Use `console.log` for quick checks.
- **Browser DevTools:** Set breakpoints and step through code.
- **Error Boundaries:** Catch and display UI errors.
- **Strict Mode:** Use `<React.StrictMode>` to highlight issues.
- **Linting/Type Checking:** Use [ESLint](/g/eslint) and [TypeScript](/g/typescript) to catch bugs early.

**Example:**

```jsx
import React from "react";

function MyComponent({ value }) {
  React.useEffect(() => {
    console.log("Value changed:", value);
  }, [value]);

  return <div>{value}</div>;
}
```

**Tip:** Use the React DevTools "Highlight Updates" feature to visualize unnecessary re-renders.

---

## Conclusion

React is a powerful library with a rich ecosystem and a vibrant community. Understanding its core concepts—components, state, props, hooks, and more—will help you build robust and maintainable applications. Whether you're just starting or looking to deepen your knowledge, these common questions and answers should serve as a helpful reference on your React journey.
