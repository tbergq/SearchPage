import React from 'react';
import PropTypes from 'prop-types';

import FlightListItem from './FlightListItem';

const FlightList = ({ flights }) => (
  <div>
    {flights.map(flight => <FlightListItem key={flight.id} flight={flight} />)}
  </div>
);

FlightList.propTypes = {
  flights: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FlightList;
