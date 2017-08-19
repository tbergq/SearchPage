import axios from 'axios';

export const FETCH_PLACES_SUCCESS = 'SEARCH_PAGE/FETCH_PLACES_SUCCESS';
export const FETCH_FLIGHTS_SUCCESS = 'SEARCH_PAGE/FETCH_FLIGHTS_SUCCESS';
export const SEARCHING_FLIGHTS = 'SEARCHING_FLIGHTS';

export const searchSuggestionChange = (value, key) => dispatch =>
  axios
    .get(`https://api.skypicker.com/places?term=${value}&v=2&locale=en`)
    .then((response) => {
      dispatch({
        type: FETCH_PLACES_SUCCESS,
        places: response.data,
        key,
      });
    });

export const searchForFlights = (fromPlace, toPlace, date) => (dispatch) => {
  const travelDate = date.split('.').join('%2F');
  dispatch({ type: SEARCHING_FLIGHTS });
  axios
    .get(
      `https://api.skypicker.com/flights?v=2&locale=en&flyFrom=${fromPlace}&to=${toPlace}&dateFrom=${travelDate}&dateTo=${travelDate}&typeFlight=return&returnFrom=&returnTo=`,
    )
    .then((response) => {
      dispatch({
        type: FETCH_FLIGHTS_SUCCESS,
        flights: response.data,
      });
    });
};
