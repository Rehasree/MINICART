import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import logo from './logo.svg'
function Navbarr() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">
                    <img
                    alt="logo"
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                E-COMMERCE CART
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="/wishlist"><button className="btn btn-info"> Cart</button></Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbarr
