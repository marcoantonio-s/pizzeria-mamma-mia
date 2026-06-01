import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { UserContext } from '../contexts/UserContext';

function NavBar () {
  
    const { token, logout } = useContext(UserContext);
    const { total } = useContext(CartContext);

    return (
    <Navbar className='fixed-top' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Pizzería Mamma Mía</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">🍕 Home</Nav.Link>

              {token ? (
                <>
                  <Nav.Link as={Link} to="/profile">🔓 Profile</Nav.Link>
                  <Nav.Link onClick={logout}>🔐 Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">🔐 Login</Nav.Link>
                  <Nav.Link as={Link} to="/register">🔐 Register</Nav.Link>
                </>
              )}
            </Nav>
          <Button variant="outline-light" as={Link} to="/cart">🛒 Total: ${(total || 0).toLocaleString()}</Button>
        </Container>
    </Navbar>
    )
}

export default NavBar;