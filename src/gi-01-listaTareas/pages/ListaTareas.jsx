import React, { useReducer, useRef } from 'react';
import {ButtonBack} from '../../components/ButtonBack';

// recibe el estado y la acción
const reducer = (state = {}, action = {}) => {
  // console.log(action); //Object { type: "add_task", title: "aaa" }
  switch (action.type) {
    case 'add_task':
      return (
        console.log(action.title)
      )

  }
  return state
}

export const ListaTareas = () => {
  const inputRef = useRef();
  // dispatch: evento para modificar el estado internamente
  const [state, dispatch] = useReducer(reducer, reducer());

  // Submit
  const handleSubmit = (ev) => {
    ev.preventDefault();
    // cuando llamamos a dispatch se ejecuta la función del reducer
    dispatch({
      type: 'add_task',// tipo de evento o acción queremos realizar
      title: inputRef.current.value
    });
  }

  return (
    <>
      <ButtonBack />
      <h1>ListaTareas</h1>
      <div className="d-flex flex-row">
        <form onSubmit={handleSubmit} className='col-md-6'>
          <input
            type="text"
            placeholder='Tarea'
            className='form-control'
            ref={inputRef}
          />

          <button type="submit" className='btn btn-primary mt-3'>Enviar</button>
        </form>
        <div className="col-md-6 mx-2">
          <p>Lista</p>
        </div>
      </div>
    </>
  )
}
