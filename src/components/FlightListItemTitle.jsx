import React from 'react';
import PropTypes from 'prop-types';
import { CardTitle } from 'material-ui/Card';

import AirlinesData from '../utils/AirlineCodes';

const FlightListItemTitle = ({ airlines, price }) => {
  const airline = AirlinesData.find(i => i.iata === airlines[0]);
  const title = `${airline ? airline.name : ''} ${price}€`;
  const subtitle = airline ? airline.iata : '';
  return <CardTitle title={title} subtitle={subtitle} />;
};

FlightListItemTitle.propTypes = {
  airlines: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
};

export default FlightListItemTitle;
