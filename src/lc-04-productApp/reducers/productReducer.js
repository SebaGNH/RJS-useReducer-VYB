import { Types } from "../types/Types";

export const initialState = {
  products: [
    { id: 1, title: "Producto #1" },
    { id: 2, title: "Producto #2" },
  ],
  cart: [ // No es necesario poner el titile ya que tenemos el id
    { id: 6, title: "Producto #6", quantity: 1 }
  ],
  active: { id: 2, title: "Producto #2", quantity: 1 }
};

export const productReducer = (state = initialState, action = {}) => {
  // console.log(state.cart)
  // console.log(action)

  switch (action.type) {
    // Show
    case Types.show: return {
      ...state,
      active: state.products.find( prod => prod.id === action.payload)
        }
    // Add
    // case Types.add: return {
    //   ...state,
    //   cart: [
    //     ...state.cart, // Agregamos  los productos del carrito ...state.cart
    //     action.payload // Nuevo producto completo
    //   ]
    // }
    // Add
    case Types.add: { // cp = cart product
      const newProduct = state.cart.find(cp => cp.id === action.payload.id);
      return newProduct
      ? {
        ...state, // retornamos el estado actual, pero editando el carrito
        cart: state.cart.map( cp =>
          cp.id === newProduct.id
            ? {...cp, quantity: cp.quantity +1}
            : cp
        )

      }
      : {
      ...state,
      cart: [
        ...state.cart, // Agregamos  los productos del carrito ...state.cart
        {...action.payload, quantity: 1 } // Nuevo producto completo
      ]
    }}
    // Remove
    case Types.remove: return {
      ...state,
      cart: state.cart.filter( car => car.id !== action.payload )
    }
    default:
      state;
  }
  return state
};
