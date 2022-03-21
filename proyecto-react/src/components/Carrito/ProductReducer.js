import { types } from "./types";

const initialProductState = {
  products: [
    { id: 1, title: "producto #1" },
    { id: 2, title: "producto #2" },
  ],

  cart: [{ id: 1, title: "producto #1", quantity: 1 }],

  activeProduct: { id: 2, title: "producto #2" },
};

const productReducer = (state, action) => {
  switch (action.types) {
    case types.showProduct:
      return {
        ...state,
        activeProduct: action.payload,
      };

    default:
      return state;
  }
};
export { initialProductState };
export default productReducer;
