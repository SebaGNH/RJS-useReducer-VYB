import React, { useReducer } from 'react'
import { ButtonBack } from '../components/ButtonBack'

const initialTodo = [
  { id: 1, title: 'Todo #1'},
  { id: 2, title: 'Todo #2'}
];

const Types = {
  add: 'add',
  delete: 'delete'
}

const reducer = (state = initialTodo, action = {}) => {
  // console.log(action) // Object { type: "delete", payload: 2 }
  switch (action.type) {
    case Types.delete: return state.filter( s => s.id != action.payload)
    default: return state;
  }
}

export const TodoLC = () => {
  //Va reducer() xq estamos ejecutando la función y devuelve el "initialTodo" por state xq ya tenemos valore por defecto en reducer
  const [state, dispatch] = useReducer(reducer, reducer());
  return (
    <>
      <ButtonBack nombre='Luis Cabrera'/>
      <h1>Todo App</h1>

      <ul>
        { state.map( (todo) => (
            <li key={todo.id}>
              {todo.title}
              <button
                className='btn btn-dark bg-transparent bi bi-trash'
                // por convención para cualquier dato que se utilice para la actualización va por la palbra 'payload' en lugar de poner Ej: id, de esta manera estaremos llamando al id en action.payload del reducer
                onClick={()=> dispatch({
                  type: Types.delete,
                  payload: todo.id
                })}
              >
              </button>
            </li>
          ))}
      </ul>

    </>
  )
}
