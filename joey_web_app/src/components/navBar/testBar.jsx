import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

export const NavigationBar = () => (
<Styles>
<Navbar expand="lg">
    <Navbar.Brand href="/">Joey Tre' </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
        <Nav.Item><Nav.Link href="/music">Music</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/videos">Videos</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/photos">Photos</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/news">News</Nav.Link></Nav.Item>
    </Nav>
    </Navbar.Collapse>
</Navbar>
</Styles>
)

const Styles = styled.div`
.navbar { background-color: hsla(0, 0%, 10%,1)   }
a, .navbar-nav, .navbar-light .nav-link {
color: red;
font-size: 1.5em;
&:hover { color: white; }
}
.navbar-brand {
font-size: 2.4em;
color: red;
&:hover { color: white; }
}

`;