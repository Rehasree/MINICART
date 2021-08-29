import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import logo from './logo.svg'
import {connect} from 'react-redux';
function Navbarr(props) {
    console.log(props.product)
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

const mapStateToProps = (state) => ({
	product: state.product
  })
  
export default connect(mapStateToProps)( Navbarr)
