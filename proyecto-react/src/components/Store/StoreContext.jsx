import { createContext, useReducer } from "react";
import StoreReducer, { initialStore } from "./StoreReducer";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [state, dispach] = useReducer(StoreReducer, initialStore);

  return (
    <StoreContext.Provider value={[state, dispach]}>
      {children}
    </StoreContext.Provider>
  );
};
export { StoreContext };
export default StoreProvider;
