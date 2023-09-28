import React, { useReducer } from 'react';
import {ButtonBack} from '../../components/ButtonBack';

const initialState = {

}
// recibe el estado y la acción
const reducer = (state = initialState, action = {}) => {
  return state
}


export const ListaTareas = () => {
// dispatch: evento para modificar el estado internamente
  const [state, dispatch] = useReducer(reducer, reducer());
  return (
    <>
      <ButtonBack />
      <h1>ListaTareas</h1>
      <form>
        <input type="text" name="" id="" placeholder='Tarea' className='form-control'/>

        <button type="submit" className='btn btn-primary mt-3'>Enviar</button>
      </form>
    </>
  )
}
