import React from 'react';
import { Navbar, Container, Nav, NavLink, NavDropdown } from 'react-bootstrap';
import '../style/Landingpage.css';
import logo from '../asset/logo.png';

const Landingpage = () => {
  return (
    <div>
      <Navbar className="navigation-landingpage">
        <Container className="navigation">
          <div className="logo">
            <NavLink>
              {' '}
              <img src={logo} className="logo" alt="logo" />
            </NavLink>
          </div>
          <Nav className="navigationtengah">
            <NavLink>PEMESANAN KAMAR</NavLink>
            <NavLink>BAYAR SEWA BULANAN</NavLink>
          </Nav>
          <Nav className="login">
            <NavLink>HOME</NavLink>
            <Nav>
              <NavDropdown id="nav-dropdown-dark-example" title="USER" menuVariant="dark" className="nav-dropdown-custom">
                <NavDropdown.Item href="#action/3.1">LOGOUT</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Landingpage;
