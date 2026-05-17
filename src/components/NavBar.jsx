import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function NavBar () {
  
    let total = 25000;
    let token = true;

    return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Pizzería Mamma Mía</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">🍕 Home</Nav.Link>
            {token == true ? <Nav.Link as={Link} to="/login">🔐 Login</Nav.Link> : <Nav.Link href="#profile">🔐 Profile</Nav.Link>}
            {token == true ? <Nav.Link as={Link} to="/register">🔐 Register</Nav.Link> : <Nav.Link href="#logout">🔐 Logout</Nav.Link>}
          </Nav>
          <Button variant="outline-light" as={Link} to="/cart">🛒 Total: ${total.toLocaleString()}</Button>
        </Container>
    </Navbar>
    )
}

export default NavBar;