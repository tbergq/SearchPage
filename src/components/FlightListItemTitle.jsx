import React from 'react';
import PropTypes from 'prop-types';
import { CardTitle } from 'material-ui/Card';

import AirlinesData from '../utils/AirlineCodes';

const FlightListItemTitle = ({ airlines }) => {
  const airline = AirlinesData.find(i => i.iata === airlines[0]);
  return airline
    ? <CardTitle title={airline.name} subtitle={airline.iata} />
    : null;
};

FlightListItemTitle.propTypes = {
  airlines: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FlightListItemTitle;
