import schema from './store.schema';

let initialState = {
  ...schema,
};

export const reducer = (state = initialState, action) => {
  console.log(`REDUCER action/payload: ${action.type}: `, action.payload);
  switch (action.type) {
    case 'RESET': {
      return initialState;
    }

    case 'SET_STATE': {
      return {
        ...state,
        ...action.payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
