import React, { useReducer } from 'react'
import { ButtonBack } from '../../components/ButtonBack'

const initialState = {
  count: 0
}

// recibe el estado inicial y la acción
// recibe = {} para que no sea undefined
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1
      }
  }
  return state
}

export const Contador = () => {
// recibe el reducer y el estado inicial
// devuelve el estado y a la función dispatch le enviamos las acciones
  const [state, dispatch] = useReducer(reducer, reducer());

  const incrementar = () => dispatch({type:'increment'});

  return (
    <div className="container">
      <ButtonBack/>
      <h1>Contador: <span> {state.count} </span> </h1>

      <button
        className="btn btn-primary"
        onClick={incrementar}
      >Incrementar</button>

    </div>
  )
}
