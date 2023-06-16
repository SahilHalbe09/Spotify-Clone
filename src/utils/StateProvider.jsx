import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const Stateprovider = ({ initialState, reducer, children }) => <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>;

export const useStateProvider = () => useContext(StateContext);
