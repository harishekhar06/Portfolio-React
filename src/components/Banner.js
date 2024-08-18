import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImage from '../assets/images/dev.png'

export const Banner = () => {
    return (
        <section className="banner" id='home'>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <h1>{"Hi,I'm Hari Shekhar"}</h1>
                    <h2>{"Software Engineer"}</h2>
                    <button onClick={() => console.log('Connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImage} alt="header image" />
                </Col>
            </Row>
        </section>
    );
}