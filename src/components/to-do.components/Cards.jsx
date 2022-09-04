import React from 'react'
import Card from './Card'

const Cards = ({todos, checkToDo, deleteTodo, filteredTodos,setTodos}) => {

  return (
    <div>
        {filteredTodos.map((item)=> { 
            return <Card 
            setTodos={setTodos}
            todos={todos}
            key={item.id} 
            date={item.date}
            title={item.title} 
            text={item.text}
            checkToDo={checkToDo} 
            id={item.id}
            isCompleted={item.isCompleted}
            deleteTodo={deleteTodo}
            
            />
        })}
       
    </div>
  )
}

export default Cards