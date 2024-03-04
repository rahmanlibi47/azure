import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Switch from '@mui/material/Switch';
import LoopIcon from '@mui/icons-material/Loop';

function Navbars({ rotate, setRotate }) {
  const handleToggle = (event, newValue) => {
    setRotate(newValue);
  };

  return (
    <Navbar className="bg-dark navbar-opacity">
      <Container  >
        <Navbar.Brand style={{ color: 'white' }} href="/"><RocketLaunchIcon /></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
  <div style={{ display: 'flex' }}>
    <Nav.Link className='hover-nav' style={{ color: 'white' }} href="/">Home</Nav.Link>
    <Nav.Link className='hover-nav' style={{ color: 'white' }} href="/about">About</Nav.Link>
  </div>
  <div style={{ display: 'flex', alignItems: 'center' }}>
  <span style={{ marginRight: '10px', color: 'white' }}><LoopIcon/></span>
  <Switch checked={rotate} onChange={handleToggle} />
</div>
</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;