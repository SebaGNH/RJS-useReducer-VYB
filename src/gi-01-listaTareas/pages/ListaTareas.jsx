import React, { useReducer, useRef } from 'react';
import {ButtonBack} from '../../components/ButtonBack';

// recibe el estado y la acción
const reducer = (state = [], action = {}) => {
  // console.log(action); //Object { type: "add_task", title: "aaa" }
  switch (action.type) {
    case 'prueba':
      return (
        console.log(action.title) // Hola <-- viene del input

      )
    case 'add_task':
      return [
        ...state, { id: state.length, title: action.title }
      ]

  }
  return state // este sería el default: { state }
}

export const ListaTareas = () => {
  const inputRef = useRef();
  // dispatch: evento para modificar el estado internamente
  const [state, dispatch] = useReducer(reducer, reducer());
  // console.log('state', state);

  // Submit
  const handleSubmit = (ev) => {
    ev.preventDefault();
    // cuando llamamos a dispatch se ejecuta la función del reducer
    dispatch({
      type: 'add_task',// tipo de evento o acción queremos realizar
      title: inputRef.current.value
    });
    inputRef.current.value = ''; // limpiamos input
  }

  return (
    <>
      <ButtonBack />
      <h1>ListaTareas</h1>
      <div className="d-flex flex-row">
        <form onSubmit={handleSubmit} className='col-md-6'>
        <h2>Formulario</h2>
          <input
            type="text"
            placeholder='Tarea'
            className='form-control'
            ref={inputRef}
          />

          <button type="submit" className='btn btn-primary mt-3'>Enviar</button>
        </form>
        <div className="col-md-6 mx-2">
          <h3>Lista</h3>
            <ul>
          {
              state?.map((lista, idx) => (
                <li key={idx}>{lista.title}</li>
              ))
          }
            </ul>
        </div>
      </div>
    </>
  )
}


/*
Probar sacar el ref por una variable o value

*/
