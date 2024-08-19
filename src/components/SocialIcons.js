import React from 'react';
import navIcon1 from '../assets/images/linkedin-icon.png';
import navIcon2 from '../assets/images/github-icon.png';
import navIcon3 from '../assets/images/instagram-icon.png';

export const SocialIcons = () => {
    return (
        <div className="social-icon">
            <button onClick={() => window.location.href='https://www.linkedin.com'}>
                <img src={navIcon1} alt="LinkedIn" />
            </button>
            <button onClick={() => window.location.href='https://github.com'}>
                <img src={navIcon2} alt="GitHub" />
            </button>
            <button onClick={() => window.location.href='https://www.instagram.com'}>
                <img src={navIcon3} alt="Instagram" />
            </button>
        </div>
    );
};
