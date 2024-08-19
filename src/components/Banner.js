import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import headerImage from '../assets/images/dev.png';

export const Banner = () => {
    return (
        <section className="banner" id='home'>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <h1>{"Hi, I'm Hari Shekhar"}</h1>
                    <h2>{"A software Engineer."}<span> {"Let's connect and create something new"}</span></h2>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImage} alt="header image" className="animated-image" />
                </Col>
            </Row>
        </section>
    );
}