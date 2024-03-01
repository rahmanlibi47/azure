import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbars() {
  return (
    <Navbar className="bg-dark">
      <Container  >
        <Navbar.Brand style={{color:'white'}} href="/">Coderz</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="me-auto">
            <Nav.Link className='hover-nav' style={{color:'white'}} href="/">Home</Nav.Link>
            <Nav.Link className='hover-nav' style={{color:'white'}} href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;