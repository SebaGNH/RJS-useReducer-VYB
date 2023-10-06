import React, { useReducer, useState } from 'react'
import { ButtonBack } from '../components/ButtonBack'

const initialTodo = [
  { id: 1, title: 'Todo #1'},
  { id: 2, title: 'Todo #2'}
];

const Types = {
  add: 'add',
  delete: 'delete',
  edit: 'edit'
}

// [{}] xq el initialTodo es un arreglo de objetos
const reducer = (state = initialTodo, action = [{}]) => {
  // console.log(action) // Object { type: "delete", payload: 2 }
  // console.log(state) // Array [ {…}, {…} ]

  // console.log(...state) // digamos que ... quita los []
  // Object { id: 1, title: "Todo #1" } Object { id: 2, title: "Todo #2" }

  switch (action.type) {
    case Types.delete: return state.filter( s => s.id != action.payload)
    //case Types.add: return [...state , { id: 5 , title: action.payload}]
    // el reducer debe mantenerce como una funcion pura por lo que no podemos usar acá el mathrandom para generar el id nuevo, este dato viene generalmente de la base de datos
    case Types.add: return [...state , action.payload ]
    case Types.edit: return state
    default: return state;
  }
}

export const TodoLC = () => {
  //Va reducer() xq estamos ejecutando la función y devuelve el "initialTodo" por state xq ya tenemos valore por defecto en reducer
  const [state, dispatch] = useReducer(reducer, reducer());
  const [inputText, setinputText] = useState('');

  // onClick Add
  const handleClick = () => {
    const newTodo = { id: Math.random().toString(36).substring(2) , title: inputText}
    dispatch({
      type: Types.add,
      payload: newTodo
    })
    setinputText(''); // Limpiamos input
  }

  const handleEdit = (todo) => { // { id: 1, title: "Todo #1" }
    setinputText(todo.title)
    dispatch({
      type: Types.edit// ,
      // payload: todo
    });
  }


  return (
    <>
      <ButtonBack nombre='Luis Cabrera'/>
      <h1>Todo App</h1>

      <div className='d-flex'>

      <ul className='col-md-6'>
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
              ></button>
              <button
                className='btn btn-dark bg-transparent bi bi-pencil-square'
                onClick={ () => handleEdit(todo) }
              ></button>
            </li>
          ))}
      </ul>
      <div className="col-md-6">
        <input
          type="text"
          value={inputText}
          onChange={ (ev) => setinputText(ev.target.value)}
          placeholder='Tarea'
          className='form-control'
          maxLength={30}
        />
        <button
          className='btn btn-primary mt-2'
          onClick={handleClick}
        >Agregar</button>
      </div>
    </div>
    </>
  )
}
