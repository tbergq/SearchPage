import axios from 'axios';

export const FETCH_PLACES_SUCCESS = 'SEARCH_PAGE/FETCH_PLACES_SUCCESS';

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
