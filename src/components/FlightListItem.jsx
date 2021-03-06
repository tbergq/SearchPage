import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText } from 'material-ui/Card';
import styled from 'styled-components';

import FlightListItemTitle from './FlightListItemTitle';
import FlightInfo from './FlightInfo';

const ListItemWrapper = styled.div`
  margin-bottom: 16px;
`;

const CardTextWrapper = styled.div`
  display: flex;
`;

const TimeAndStop = styled.div`
  margin-right: 16px;
`;

const FlightListItem = ({ flight }) => (
  <ListItemWrapper>
    <Card>
      <FlightListItemTitle airlines={flight.airlines} price={flight.price} />
      <CardText>
        <CardTextWrapper>
          <FlightInfo
            city={flight.cityFrom}
            time={flight.dTime}
            airportCode={flight.flyFrom}
          />
          <TimeAndStop>
            <div>{flight.fly_duration}</div>
            <div>{flight.route.length} stops</div>
          </TimeAndStop>
          <FlightInfo
            city={flight.cityTo}
            time={flight.aTime}
            airportCode={flight.flyTo}
          />
        </CardTextWrapper>
      </CardText>
    </Card>
  </ListItemWrapper>
);

FlightListItem.propTypes = {
  flight: PropTypes.shape({
    airlines: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    cityFrom: PropTypes.string.isRequired,
    dTime: PropTypes.number.isRequired,
    flyFrom: PropTypes.string.isRequired,
    fly_duration: PropTypes.string.isRequired,
    route: PropTypes.arrayOf(PropTypes.object).isRequired,
    cityTo: PropTypes.string.isRequired,
    aTime: PropTypes.number.isRequired,
    flyTo: PropTypes.string.isRequired,
  }).isRequired,
};

export default FlightListItem;
