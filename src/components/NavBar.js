import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Update active link based on scroll position
            const sections = ['home', 'skills', 'projects', 'connect'];
            const scrollPosition = window.scrollY;
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    if (scrollPosition >= offsetTop - 50 && scrollPosition < offsetTop + offsetHeight - 50) {
                        setActiveLink(section);
                    }
                }
            });
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Navbar expand="lg" className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <Container>
                <Navbar.Brand href="#home">HaSh</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav">
                        <Nav.Link 
                            href="#home" 
                            className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'}
                            onClick={() => {
                                onUpdateActiveLink('home');
                                scrollToSection('home');
                            }}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link 
                            href="#skills" 
                            className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'}
                            onClick={() => {
                                onUpdateActiveLink('skills');
                                scrollToSection('skills');
                            }}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link 
                            href="#projects" 
                            className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'}
                            onClick={() => {
                                onUpdateActiveLink('projects');
                                scrollToSection('projects');
                            }}
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link 
                            href="#connect" 
                            className={activeLink === 'connect' ? 'active-navbar-link' : 'navbar-link'}
                            onClick={() => {
                                onUpdateActiveLink('connect');
                                scrollToSection('connect');
                            }}
                        >
                            Contact Me
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};