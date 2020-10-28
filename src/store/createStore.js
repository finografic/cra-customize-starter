// const createStore = ({ initialState }) => ({ initialState });
const createStore = ({ reducer, initialState }) => ({ reducer, initialState });
export default createStore;
