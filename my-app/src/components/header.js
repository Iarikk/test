import React, { Component } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './images/logo.svg';
import Vector from './images/Vector.svg';
import './header.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    
import Home from "../pages/Home";
import AllProject from "../pages/Allproject";
import Profile from "../pages/Profile";
import Project from "../pages/Project";

export default class Header extends Component {
    render() {
        return (
            <Router>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="50"
                                width="150"
                                className="d-inline-block align-top logo"
                                alt="logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
                            <Nav className="mr-auto">
                                <Nav.Link href="/allproject">Все проекты</Nav.Link>
                                <Nav.Link href="/project">Мои проекты</Nav.Link>
                            </Nav>
                            <Navbar.Brand href="/profile">
                                <img
                                    src={Vector}
                                    height="30"
                                    width="16"
                                    className="vector"
                                />
                            </Navbar.Brand>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project" element={< Project/>} />
                    <Route path="/allproject" element={<AllProject />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Router>
        )
    }
}