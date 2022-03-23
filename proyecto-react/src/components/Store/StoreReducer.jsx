const types = {
  showModal: "showModal",
  closeModal: "closeModal",
};

const initialStore = {
  products: [
    { id: 1, title: "producto #1" },
    { id: 2, title: "producto #2" },
  ],

  cart: [{ id: 1, title: "producto #1", quantity: 1 }],

  activeProduct: { id: 2, title: "producto #2" },
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
    default:
      return state;
  }
};
export { initialStore, types };
export default StoreReducer;
