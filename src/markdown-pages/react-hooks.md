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
  const [todoList, setTodoList] = React.useState([]);

  React.useEffect(async () => {
    const response = await fetch(/* get todo data from somewhere asynchronously */);
    setTodoList(response.data);
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
  const [todoList, setTodoList] = React.useState([]);
  const [todoFilter, setTodoFilter] = React.useState('');

  React.useEffect(async () => {
    // assuming that the backend will provide all the todo data, we just have to specify the filter.
    // this way, we only for new todos when the filter changes, not during every render.
    const response = await fetch(/* get todo data from somewhere asynchronously with filter option */`?filter=${todoFilter}`);
    setTodoList(response.data);
  }, [todoFilter]);

  return(
    <>
    { TodoList.map(todo => <div>{ todo }<div>) }
    </>
  )
}
```
### useMemo
### useCallback
Like use memo but returns the function (as opposed to returning the value of the function in useMemo). Can also be used to check referential equality.
### useRef
### useReducer
```javascript
const reducerFn = function() {}
const initialState = { count: 0 }
const [ state, dispatch ] = useReducer(reducerFn, initialState)
```