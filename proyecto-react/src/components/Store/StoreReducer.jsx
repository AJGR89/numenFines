import { products } from "../Products/products";

const types = {
  showModal: "showModal",
  closeModal: "closeModal",
  addToCart: "addToCart",
  removeOneToCart: "removeOneToCart",
  removeAllToCart: "removeAllToCart",
  cleanCart: "cleanCart",
};

const prod = products;

const initialStore = {
  products: prod,

  cart: JSON.parse(localStorage.getItem("cart")) || [],

  activeProduct: JSON.parse(localStorage.getItem("activeProduct")),
  showModal: false,
};

const StoreReducer = (state, action) => {
  switch (action.type) {
    case types.showModal:
      return {
        ...state,
        activeProduct: action.payload,
        showModal: true,
      };
    case types.closeModal:
      return {
        ...state,
        showModal: false,
      };
    case types.addToCart: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            showModal: false,
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
            showModal: false,
          };
    }
    case types.removeOneToCart:
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };

    case types.removeAllToCart: {
      console.log("in TYPES.REMOVE_ALL_PRODUCT");
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case types.cleanCart: {
      return {
        ...state,
        cart: [],
      };
    }

    default:
      return state;
  }
};
export { initialStore, types };
export default StoreReducer;
