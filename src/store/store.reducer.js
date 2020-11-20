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

    case 'STORE_POPULATION': {
      return {
        ...state,
        population: action.population,
      };
    }

    case 'SELECT_PROFILE': {
      // FIX FOR THE JSON ENTRY WITH ID '0' (THIS VALUE SHOULD NOT BE PERMITTED)
      action.selectedProfile.id = new String(action.selectedProfile.id);
      return {
        ...state,
        selectedProfile: action.selectedProfile,
      };
    }

    default: {
      throw new Error(`Unhandled reducer TYPE: ${action.type}`);
    }
  }
};

export default reducer;
