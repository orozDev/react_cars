import React from 'react'
import {Container}   from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => {
  return (
    <footer className="bg-primary">
        <Container className="py-3 text-white">
            <h3 className="text-center">Cars.kg</h3>
            <h5 className="text-center">Developed by OROZ</h5>
        </Container>
    </footer>
  )
}

export default Footer