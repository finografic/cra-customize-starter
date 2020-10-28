import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const StoreContext = createContext();

export const StoreProvider = (props) => {
  if (props === undefined) throw new Error('Props Undefined. You probably mixed up betweenn default/named import');
  const { store, children, ...rest } = props;
  const [state, dispatch] = useReducer(store.reducer, store.initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }} {...rest}>
      {children}
    </StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  store: PropTypes.object,
  children: PropTypes.node,
};

export const StoreConsumer = StoreContext.Consumer;

export const useStore = () => useContext(StoreContext);
