import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: "CS50x: Introduction to Computer Science",
      issuer: "Harvard University",
      date: "2024",
      link: "https://certificates.cs50.io/3a86f296-0415-45b2-836b-a35d1d7f36f4.pdf?size=letter",
      description: "An introduction to the intellectual enterprises of computer science and the art of programming."
    },
    {
      title: "CS50P: Introduction to Programming with Python",
      issuer: "Harvard University",
      date: "2025",
      link: "https://certificates.cs50.io/0c1251a6-3a3a-485e-8220-9a3b72a21b70.pdf?size=letter",
      description: "An introduction to programming using Python, focusing on solving problems with code."
    }
  ];

  return (
    <section className="certifications section-divider" id="certifications">
      <div className="certs-header">
        <h2 className="title">Certifications</h2>
      </div>
      <div className="certs-grid">
        {certifications.map((cert, idx) => (
          <div key={idx} className="cert-card">
            <div className="cert-info">
              <div className="cert-title-row">
                <div className="cert-icon-wrapper">
                  <Award size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3>{cert.title}</h3>
                  <span className="cert-meta">{cert.issuer} • {cert.date}</span>
                </div>
              </div>
              <p className="cert-desc">{cert.description}</p>
              
              <div className="cert-links">
                <a href={cert.link} target="_blank" rel="noreferrer" className="pill small-pill">
                  View Credential <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
