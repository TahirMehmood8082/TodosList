import React from 'react'

export const TodoItem = ({todoItemFromList, onDeleteFromList}) => {
  return (
    <div>
        <h4>{todoItemFromList.sno}</h4>
        <h4>{todoItemFromList.title}</h4>
        <h4>{todoItemFromList.desc}</h4>
        <button className="btn btn-sm btn-danger" onClick={()=>{onDeleteFromList(todoItemFromList)}}>Delete</button>
    </div>
  )
}
