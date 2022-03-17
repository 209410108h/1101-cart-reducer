import React, { useState, useContext, useReducer, useEffect } from 'react';
import cartItems_08 from './data';
import reducer_08 from './reducer_08';

const AppContext_08 = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems_08,
  total: 0,
  amount: 0,
}

const AppProvider_08 = ({ children }) => {
  const [state, dispatch] = useReducer(reducer_08, initialState);

  const clearCart = () => {
    dispatch({type: 'CLEAR_CART'})
  }  

  const remove = (id) => {
    dispatch({type: 'REMOVE', payload: id})
  }

  const increase = (id) => {
    dispatch({type: 'INCREASE', payload: id})
  }

  const decrease = (id) => {
    dispatch({type: 'DECREASE', payload: id})
  }

  useEffect(() => {
    dispatch({type: 'GET_TOTALS'})
  }, [state.cart]);
  return (
    <AppContext_08.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext_08.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext_08);
};

export { AppContext_08, AppProvider_08 };
