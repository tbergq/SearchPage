import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { injectGlobal } from 'styled-components';
import 'flexboxgrid/css/flexboxgrid.css';

import Routes from './components/Routes';
import Navbar from './components/Navigationbar';

injectGlobal`
  body {
    margin: 0;
  }
`;

const App = () => (
  <MuiThemeProvider>
    <div>
      <Navbar />
      <Routes />
    </div>
  </MuiThemeProvider>
);

export default App;
