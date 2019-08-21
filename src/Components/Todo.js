import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Todo() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/todos/')
        .then(response => {
            setTodos({ todos: response.data });
            console.log(response.data)
        })
        .catch(function (error){
            console.log(error);
        })
  }, []); //  Only re-run the effect if count changes

  return(
    <div>
      Todos
    </div>
  )
}

export default Todo


// {todos.map((index, todo) =>
//   <div>
//     {todo.}
//   </div>
// )}
