import React, { useReducer } from 'react'
import { ButtonBack } from '../components/ButtonBack';

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action = {}) => {

  switch (action.type) {
    case 'incrementar':  return { counter: state.counter + 1 }

  }
  return state
}

export const CounterLC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <ButtonBack /> <span> Luis Cabrera </span>


      <h2>Contador {state.counter}</h2>

      <button
        className='btn btn-primary mx-1'
        onClick={ () => dispatch( { type: 'incrementar' } ) }
      > +1 </button>
    </>
  )
}
