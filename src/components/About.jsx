import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about section-divider" id="about">
      <h2 className="title">About</h2>
      <ul className="about-list">
        <li>
          <span className="bullet"></span>
          <p>I'm a <strong>Full-Stack Builder</strong> who ships working products end-to-end — from architecture to deployment, solo.</p>
        </li>
        <li>
          <span className="bullet"></span>
          <p>I build with <strong>FastAPI, Celery, Redis, and modern AI tooling</strong>, using AI as real leverage to move fast without losing sight of how things actually work.</p>
        </li>
        <li>
          <span className="bullet"></span>
          <p>Currently a B.Tech CSE-AI student, focused on shipping real, working software and understanding it deeply enough to defend every decision.</p>
        </li>
      </ul>
    </section>
  );
};

export default About;
