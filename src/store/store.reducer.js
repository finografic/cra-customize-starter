import schema from './store.schema';

let initialState = {
  ...schema,
};

export const reducer = (state = initialState, action) => {
  console.log('%cREDUCER ACTION:', 'color:yellow', action);
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

    case 'STORE_MATCH': {
      return {
        ...state,
        match: action.match,
      };
    }

    case 'SET_DATA': {
      return {
        ...state,
        data: action.data,
      };
    }

    case 'SET_SELECTD': {
      action.selected.id = new String(action.selected.id);
      return {
        ...state,
        selected: action.selected,
      };
    }

    default: {
      throw new Error(`Unhandled reducer TYPE: ${action.type}`);
    }
  }
};

export default reducer;
