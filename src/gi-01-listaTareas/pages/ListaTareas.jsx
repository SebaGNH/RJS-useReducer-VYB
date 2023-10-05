import React, { useReducer, useRef } from 'react';
import {ButtonBack} from '../../components/ButtonBack';

// recibe el estado y la acción
const reducer = (state = [], action = {}) => {
  // console.log(action); //Object { type: "add_task", title: "aaa" }
  switch (action.type) {
    case 'add_task':
      return [
        ...state, { id: state.length, title: action.title }
      ]
    case 'del_task':
      // ya es un array, no hace falta []
      //si la tarea.ID es la distinta que action "negacíon adentro !="
      return state.filter( (tarea) => tarea.id != action.id);
  }
  return state // este sería el default: { state }
}


export const ListaTareas = () => {
  const inputRef = useRef();
  // dispatch: evento para modificar el estado internamente
  // primer argumento es la función reductora
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

  const handleClickDelete = (idx) => {
    // console.log(lista);
    dispatch({
      type: 'del_task',
      id: idx
    })
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
                <li key={idx}>
                  { lista.title }
                  <button
                    className='btn btn-dark bg-transparent bi bi-trash'
                    onClick={() => handleClickDelete(idx)}
                  >
                  </button>
                </li>
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
