import React,{useState,useEffect} from 'react';
import {Navbar, Nav} from 'react-bootstrap';

export default function NavBar(){

    return(
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">WorkList</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
        </React.Fragment>
    )

}