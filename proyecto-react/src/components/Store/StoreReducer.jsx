const initialStore = {
  products: [
    { id: 1, title: "producto #1" },
    { id: 2, title: "producto #2" },
  ],

  cart: [{ id: 1, title: "producto #1", quantity: 1 }],

  activeProduct: { id: 2, title: "producto #2" },
};

const StoreReducer = (state, action) => {
  switch (action.type) {
    default:
      state;
  }
};
export { initialStore };
export default StoreReducer;
