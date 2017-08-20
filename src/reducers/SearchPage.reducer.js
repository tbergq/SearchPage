import {
  FETCH_PLACES_SUCCESS,
  FETCH_FLIGHTS_SUCCESS,
  SEARCHING_FLIGHTS,
  PLACE_ERROR,
} from '../actions/SearchPage.actions';

const initialState = {
  fromSuggestions: [],
  toSuggestions: [],
  flights: [],
  searchingFlights: false,
  searchPerformed: false,
  placesErrorMessage: '',
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
      return Object.assign({}, state, {
        flights: action.flights.data,
        searchingFlights: false,
        searchPerformed: true,
      });
    case SEARCHING_FLIGHTS:
      return Object.assign({}, state, {
        searchingFlights: true,
        flights: [],
        searchPerformed: false,
      });
    case PLACE_ERROR:
      return Object.assign({}, state, {
        placesErrorMessage: action.errorMessage,
      });
    default:
      return state;
  }
}
