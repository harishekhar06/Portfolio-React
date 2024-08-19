import React from 'react';
import { FaPython, FaReact, FaCss3Alt, FaDatabase, FaHtml5, FaJsSquare, FaBootstrap } from 'react-icons/fa';

export const Skills = () => {
  return (
    <section id="skills" className="skills-page">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-description">
          Languages and Technologies that I have learned and applied to my projects
        </p>
        <div className="skills-icons">
          <FaPython className="skill-icon" title="Python" />
          <FaReact className="skill-icon" title="React" />
          <FaCss3Alt className="skill-icon" title="CSS" />
          <FaDatabase className="skill-icon" title="Database" />
          <FaHtml5 className="skill-icon" title="HTML" />
          <FaJsSquare className="skill-icon" title="JavaScript" />
          <FaBootstrap className="skill-icon" title="Bootstrap" />
        </div>
      </div>
    </section>
  );
};
