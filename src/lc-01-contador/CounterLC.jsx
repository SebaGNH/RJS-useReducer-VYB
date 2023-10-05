import React, { useReducer } from 'react'
import { ButtonBack } from '../components/ButtonBack';

const initialState = {
  counter: 0
}

const counterReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'incrementar':  return { ...state, counter: state.counter + 1 };
    case 'decrementar':  return { counter: state.counter - 1 };
    case 'reset':  return { counter: 0 };
    default : return state;
  }
}

export const CounterLC = () => {
  // dispatch, dispara acciones para actualizar el estado
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <>
      <ButtonBack nombre={'Luis Cabrera'}/>


      <h2>Contador {state.counter}</h2>

      <button
        className='btn btn-primary mx-1'
        onClick={ () => dispatch( { type: 'incrementar' } ) }
      > +1 </button>
      <button
        className='btn btn-primary mx-1'
        onClick={ () => dispatch( { type: 'reset' } ) }
      > 0 </button>
      <button
        className='btn btn-primary mx-1'
        onClick={ () => dispatch( { type: 'decrementar' } ) }
      > -1 </button>
    </>
  )
}
