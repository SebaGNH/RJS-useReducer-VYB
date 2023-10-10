import React, { useReducer } from "react";
import { ButtonBack } from "../components/ButtonBack";
import { initialState, productReducer } from "./reducers/productReducer";

const ProductAppLC = () => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  console.log(state)
  return (
    <>
      <ButtonBack nombre="Luis Cabrera " />
      <h1>Product App </h1>
      <h3>Productos</h3>
      <ul>
        { state.products.map( product => (
          <li key={product.id}>
            {product.title}
            <button
              className="btn btn-dark bg-transparent bi-plus-square">
            </button>
            <button
              className="btn btn-dark bg-transparent bi-eye">
            </button>
            </li>
          ))
        }
      </ul>


      <h3>Cart</h3>
      <ul>
        {
          state.cart.map( car => (
            <li key={car.id}>
          {car.title}
              <button
                className="btn btn-dark bg-transparent bi bi-cart">
              </button>
            </li>
          ))
        }
      </ul>


      <h2>Preview</h2>
      <p>{state.active.title}</p>
    </>
  );
};

export default ProductAppLC;
