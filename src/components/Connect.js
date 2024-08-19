import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SocialIcons } from './SocialIcons';

export const Connect = () => {
    return (
        <section className="connect" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <h2>{"Let's Connect"}</h2>
                        <p>Feel free to connect with me on social media platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
                        <SocialIcons />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
