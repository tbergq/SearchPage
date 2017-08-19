import { FETCH_PLACES_SUCCESS } from '../actions/SearchPage.actions';

const initialState = {
  fromSuggestions: [],
  toSuggestions: [],
};

export default function searchPageReducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case FETCH_PLACES_SUCCESS:
      if (action.key === 'fromSuggestions') {
        return Object.assign({}, state, { fromSuggestions: action.places });
      } else if (action.key === 'toSuggestions') {
        return Object.assign({}, state, { toSuggestions: action.places });
      }
      return state;
    default:
      return state;
  }
}
