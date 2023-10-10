export const initialState = {
  products: [
    { id: 1, title: "Producto #1" },
    { id: 2, title: "Producto #2" },
  ],
  cart: [ // No es necesario poner el titile ya que tenemos el id
    { id: 1, title: "Producto #1", quantity: 1 }
  ],
  active: { id: 2, title: "Producto #2", quantity: 1 }
};

export const productReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      state;
  }
};
