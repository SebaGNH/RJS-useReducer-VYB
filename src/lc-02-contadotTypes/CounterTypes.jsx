import React, { useReducer } from 'react'
import { ButtonBack } from '../components/ButtonBack';

const initialState = {
  counter: 0
}

// Así evitamos ingresar mal los typos en dipatch o el reducer
const Types = {
  incrementar: 'incrementar',
  decrementar: 'decrementar',
  reset: 'reset',
}

const counterReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case Types.incrementar :  return { counter: state.counter + 2 };
    case Types.decrementar :  return { counter: state.counter - 2 };
    case Types.reset:  return { counter: 0 };
    default : return state;
  }
}

export const CounterTypes = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <>
      <ButtonBack nombre={'Luis Cabrera'}/>


      <h2>Contador {state.counter}</h2>

      <button
        className='btn btn-primary mx-1'
        onClick={ () => dispatch( { type: Types.incrementar } ) }
      > +2 </button>
      <button
        className='btn btn-primary mx-1'
        onClick={ () => dispatch( { type: Types.reset } ) }
      > 0 </button>
      <button
        className='btn btn-primary mx-1'
        onClick={ () => dispatch( { type: Types.decrementar } ) }
      > -2 </button>
    </>
  )
}
