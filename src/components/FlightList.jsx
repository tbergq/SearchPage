import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FlightListItem from './FlightListItem';

const Wrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 16px;
  padding-right: 16px;
  max-width: 1172px;
`;

const FlightList = ({ flights }) => (
  <Wrapper>
    {flights.map(flight => <FlightListItem key={flight.id} flight={flight} />)}
  </Wrapper>
);

FlightList.propTypes = {
  flights: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FlightList;
