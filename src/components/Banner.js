import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import headerImage from '../assets/images/dev.png';
import navIcon1 from '../assets/images/linkedin-icon.png';
import navIcon2 from '../assets/images/github-icon.png';
import navIcon3 from '../assets/images/instagram-icon.png';

export const Banner = () => {
    return (
        <section className="banner" id='home'>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <h1>{"Hi, I'm Hari Shekhar"}</h1>
                    <h2>{"Software Engineer"}</h2>
                    <div className="social-icon">
                        <a href="#"><img src={navIcon1} alt="LinkedIn" /></a>
                        <a href="#"><img src={navIcon2} alt="GitHub" /></a>
                        <a href="#"><img src={navIcon3} alt="Instagram" /></a>
                    </div>
                    <div className="connect-button-wrapper">
                        <button className="vvd" onClick={() => console.log('connect')}>
                            <span>Let's connect</span>
                        </button>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImage} alt="header image" className="animated-image" />
                </Col>
            </Row>
        </section>
    );
}