import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  medications: [],
  // Add other states as needed
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MEDICATION':
      return { ...state, medications: [...state.medications, action.payload] };
    // Handle other actions
    default:
      return state;
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
