import './App.css';
import { Footer } from './components/Footer';
import Navbar from './components/NavBar';
import { TodoList } from './components/TodoList';
import React, { useState } from 'react';
import { AddTodo } from './components/AddTodo';

function App() {
  const onDelete = (todoItemFromList)=>{
    console.log("on Delete From App: ", todoItemFromList)

    setTodosArray(todosArray.filter((e)=>{
      return e!==todoItemFromList;
    }))
  }
  const addTodoFunc = (title, desc) =>{
    console.log("I am adding this todo", title,desc);
  }
  const [todosArray, setTodosArray] = useState([
    {
      sno: 1,
      title: "hi",
      desc:"i am happy"
    },
    {
      sno: 2,
      title: "hi2222",
      desc:"i am happy222"
    },
    {
      sno: 3,
      title: "hi333",
      desc:"i am happy333"
    }

  ]);
  return (
    <>
      <Navbar title="App Todo List"/>
      <AddTodo addTodoFunction={addTodoFunc}/>
      <TodoList todosArrayFromApp = {todosArray} onDeleteFromApp = {onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
