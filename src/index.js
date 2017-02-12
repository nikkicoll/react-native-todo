import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import './index.css';

ReactDOM.render(
  <TodoApp />,
  document.querySelector('.container-fluid')
);

// NOTES:
// React Native there is no DOM (manages components)
  // Goal: lib shared among Andriod and iOS but differences on either platform
  // Components are slightly different (no p tag, h1, etc)
  // But equivalent elements to achieve same thing
// Converting todo app from React to React Native

// React overview
  // Composition over inheritance
    // Build small building blocks and put them together to build the greater whole

// ES6: arrow fns, class syntax, spread operator, deconstruction

// Todo: CRUD App
  // Create React App (sets up env with no headache)

// Destructuring in ES6:
  // myObj = {hello: 10}
  // var myHello = myObj.hello;
  // myHello = 10
  // var {hello} = myObj;
  // hello = 10




