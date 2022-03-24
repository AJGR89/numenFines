import { createContext, useEffect, useReducer } from "react";
import StoreReducer, { initialStore } from "./StoreReducer";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [state, dispach] = useReducer(StoreReducer, initialStore);
  const { cart, activeProduct, showModal } = state;
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("activeProduct", JSON.stringify(activeProduct));
  }, [cart, activeProduct, showModal]);

  return (
    <StoreContext.Provider value={[state, dispach]}>
      {children}
    </StoreContext.Provider>
  );
};
export { StoreContext };
export default StoreProvider;
