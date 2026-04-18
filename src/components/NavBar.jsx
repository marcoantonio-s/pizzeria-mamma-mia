import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavBar () {
  
    let total = 25000;
    let token = true;

    return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Pizzería Mamma Mía</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="active" href="#">🍕 Home</Nav.Link>
            {token == true ? <Nav.Link href="#login">🔐 Login</Nav.Link> : <Nav.Link href="#profile">🔐 Profile</Nav.Link>}
            {token == true ? <Nav.Link href="#register">🔐 Register</Nav.Link> : <Nav.Link href="#logout">🔐 Logout</Nav.Link>}
          </Nav>
          <Button variant="outline-light" href="#pricing">🛒 Total: ${total.toLocaleString()}</Button>
        </Container>
    </Navbar>
    )
}

export default NavBar;