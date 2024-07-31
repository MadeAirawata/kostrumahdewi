import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';
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
              <img src={logo} className="logo" />
            </NavLink>
          </div>
          <Nav className="navigationTengah"></Nav>
          <Nav className="login">
            <NavLink>HOME</NavLink>
            <NavLink>LOGIN</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Landingpage;
