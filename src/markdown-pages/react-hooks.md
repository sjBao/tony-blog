---
title: React Hooks (Quick Snippets)
category: blog-post
date: May 5th, 2021
description: This is my first blog post on this site.
tags:
  - blog post
  - react
---

Quick reference guide for myself for react hooks.


### useState
```javascript
const MyReactComponent = () => {
  const [count, setCount] = React.useState(4);

  const incrementCount = () => {
    setCount(previousCount => previousCount + 1);
  }
  return (
    <div>{count}</div>
    <button onClick={incrementCount}>+</button>
  )
}
```
##### More on useState():
* If initial state is derived from resource intensive logic, pass in a callback instead ie: `const [count, setCount] = React.useState(() => {/* resource intensive logic */});`
* setState() will cause the component to re-render.
* setState() overwrites the previous state. So if you use an object for state, make sure you merge the old object.

### useEffect
Used when you need your component to perform some side effect as a reaction to some change. If you're used lifecycle methods from class components, you can use this hook to recreate *componentDidMount* and *componentDidUpdate*.

##### Perform side-effect once onmount:
```javascript
const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const loadTodoList = async () => {
    const response = await fetch(/* get todo data from somewhere asynchronously */);
    setTodoList(response.data);
  }

  useEffect(() => {
    loadTodoList()
  }, []) // the second argument is empty, so this useEffect will respond to no changes and only execute once.

  return(
    <>
    { TodoList.map(todo => <div>{ todo }<div>) }
    </>
  )
}
```
##### Perform side-effect only when certain value changes:
```javascript
const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoFilter, setTodoFilter] = useState('');

  const loadTodoList = async () => {
    const response = fetch(/* api url with filter params */`?filter=${todoFilter}`);
    setTodoList(response.data);
  }

  useEffect(() => {
    // assuming that the backend will provide all the todo data, we just have to specify the filter.
    // this way, we only for new todos when the filter changes, not during every render.
    loadTodoLst();
  }, [todoFilter]);

  return(
    <>
    { TodoList.map(todo => <div>{ todo }<div>) }
    </>
  )
}
```
### useRef
Creates a reference to a value which is preserved (not recreated/reassigned) when component re-renders. Useful if you need to remember a previous prop, and or a previous state.
```javascript
const MyComponent = (props) => {
  const propsRef = useRef()
}
```
### [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)
```javascript
const memoizedVal = React.useMemo(() => resourceIntensiveFunction(a,b), [a, b])
```
• Resource intensive from a big O standpoint.
• Also used for referential equality checks.
### useCallback
Like use memo but __returns a callback function__. Can also be used to check referential equality.
```javascript
const memoizedFunction = React.useCallback(() => { /* ... */ }, [a, b]);
```
Another way of thinking about it (the code above is equivalent to):
```javascript
const memoizedFunction = React.useMemo(() => fn(){ /* ... */ }, [a, b]);
```
### useReducer
```javascript
const reducerFn = function() {}
const initialState = { count: 0 }
const [ state, dispatch ] = useReducer(reducerFn, initialState)

// ... more to come...
```