import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

import { DATE_TIME_FORMAT } from '../utils/constants';

const FlightInfoWrapper = styled.div`
  margin-right: 16px;
`;

const AirportAndTime = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const FlightInfo = ({ city, time, airportCode }) => (
  <FlightInfoWrapper>
    <AirportAndTime>
      {airportCode} {moment(time * 1000).format(DATE_TIME_FORMAT)}
    </AirportAndTime>
    <div>{city}</div>
  </FlightInfoWrapper>
);

FlightInfo.propTypes = {
  city: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  airportCode: PropTypes.string.isRequired,
};

export default FlightInfo;
