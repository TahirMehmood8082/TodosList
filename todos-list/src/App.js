import './App.css';
import { Footer } from './components/Footer';
import Navbar from './components/NavBar';
import { TodoList } from './components/TodoList';
import React, { useState, useEffect } from 'react';
import { AddTodo } from './components/AddTodo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './components/About';
function App() {
  let initTodo;
  if(localStorage.getItem("todosFromLocalStorage") === null ){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todosFromLocalStorage"));
  }
  //use hooks
  const [todosArray, setTodosArray] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todosFromLocalStorage", JSON.stringify(todosArray));
  }, [todosArray])
  //functions

  const onDelete = (todoItemFromList)=>{
    console.log("on Delete From App: ", todoItemFromList)

    setTodosArray(todosArray.filter((e)=>{
      return e!==todoItemFromList;
    }))
    localStorage.setItem("todosFromLocalStorage", JSON.stringify(todosArray));
  }
  const addTodoFunc = (title, desc) =>{
    console.log("I am adding this todo", title,desc);
    let sno;
    if(todosArray.length===0){
      sno = 0;
    }
    else{
      sno = todosArray[todosArray.length-1].sno + 1;
    }
    const myObjTodo = {
      sno: sno,
      title:title,
      desc:desc,
    }
    setTodosArray([...todosArray, myObjTodo]);
    console.log(myObjTodo);

    localStorage.setItem("todosFromLocalStorage", JSON.stringify(todosArray));

  }
  /// return of App
  return (
    <>
      <Router>
        <Navbar title="App Todo List"/>
          <Routes>
            <Route exact path='/' element={<> 
            
              {<AddTodo addTodoFunction={addTodoFunc}/>}
              {<TodoList todosArrayFromApp = {todosArray} onDeleteFromApp = {onDelete}/>}
            
            </>} />
            <Route exact path="/about" element={<About/>}/>
          </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
