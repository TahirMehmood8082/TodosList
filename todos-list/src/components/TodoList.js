import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todosArrayFromApp, onDeleteFromApp}) => {
  return (
    <div className='container'>
        <h3 className='my-3'>Todo List</h3>
        {todosArrayFromApp.length===0?"No Todos to display":
            todosArrayFromApp.map((todoItem)=>{
                return  <TodoItem todoItemFromList= {todoItem} key= {todoItem.sno} onDeleteFromList={onDeleteFromApp}/>
            })
        }
    </div>
  )
}
