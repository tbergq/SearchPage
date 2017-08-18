import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigationbar = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Search page</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav />
      <Nav pullRight />
    </Navbar.Collapse>
  </Navbar>
);

export default Navigationbar;
