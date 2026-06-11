import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { UserContext } from '../contexts/UserContext';
import { GlobalContext } from '../contexts/GlobalContext';

function NavBar () {
  
    const { user, setUser, logout } = useContext(GlobalContext);
    const { total } = useContext(CartContext);

    return (
    <Navbar className='fixed-top' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Pizzería Mamma Mía</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">🍕 Inicio</Nav.Link>

              {user ? (
                <>
                  <Nav.Link as={Link} to="/profile">🔓 Perfil</Nav.Link>
                  <Nav.Link onClick={()=> logout()} as={Link} to="/login">🔐 Cerrar Sesión</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">🔐 Iniciar sesión</Nav.Link>
                  <Nav.Link as={Link} to="/register">🔐 Registrarse</Nav.Link>
                </>
              )}
            </Nav>
          <Button variant="outline-light" as={Link} to="/cart">🛒 Total: ${(total || 0).toLocaleString()}</Button>
        </Container>
    </Navbar>
    )
}

export default NavBar;