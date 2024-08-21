import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from '../assets/images/linkedin-icon.png';
import navIcon2 from '../assets/images/github-icon.png';
import navIcon3 from '../assets/images/instagram-icon.png';

export const Connect = () => {
    return (
        <footer className="connect" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <h2 className="connect-title">{"Let's Connect"}</h2>
                        <p>Feel free to connect with me on social media platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
                        <div className="social-icon">
                            <button onClick={() => window.location.href='https://www.linkedin.com/in/a-l-hari-shekhar-06566a237/'}>
                                <img src={navIcon1} alt="LinkedIn" />
                            </button>
                            <button onClick={() => window.location.href='https://github.com/harishekhar06'}>
                                <img src={navIcon2} alt="GitHub" />
                            </button>
                            <button onClick={() => window.location.href='https://www.instagram.com'}>
                                <img src={navIcon3} alt="Instagram" />
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
