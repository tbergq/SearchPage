import {
  FETCH_PLACES_SUCCESS,
  FETCH_FLIGHTS_SUCCESS,
} from '../actions/SearchPage.actions';

const initialState = {
  fromSuggestions: [],
  toSuggestions: [],
  flights: [],
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
    case FETCH_FLIGHTS_SUCCESS:
      return Object.assign({}, state, { flights: action.flights });
    default:
      return state;
  }
}
