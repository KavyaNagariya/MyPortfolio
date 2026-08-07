import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "ViralGen AI",
      type: "Campaign Generator",
      tech: "FastAPI, Celery, Redis, MongoDB, Groq, Gemini",
      desc: "A multi-modal social media campaign generator that decouples request ingestion from worker execution, achieving sub-200ms API response times. Features a resilient multi-modal LLM pipeline with FLUX.1 visual generation.",
      links: { github: "https://github.com/KavyaNagariya/ViralGenAI" }
    },
    {
      title: "DocuMind Enterprise",
      type: "RAG App",
      tech: "FastAPI, Next.js, LangChain, Pinecone, Gemini, Docker",
      desc: "A context-aware Retrieval-Augmented Generation (RAG) platform to query private document archives. Features strict anti-hallucination contracts, verified citations (page numbers and sources), and query rephrasing.",
      links: { github: "https://github.com/KavyaNagariya/DocuMind" }
    },
    {
      title: "Campus OLX",
      type: "P2P Marketplace",
      tech: "FastAPI, React 19, PostgreSQL, SQLAlchemy, Brevo API, Cloudinary",
      desc: "A mobile-first, campus-exclusive peer-to-peer marketplace. Implements concurrency-safe reservation locks using database row-level locking (SELECT FOR UPDATE) to ensure items are never double-booked by students.",
      links: { 
        github: "https://github.com/KavyaNagariya/Campus_OLX_frontend",
        live: "https://campus-olx-frontend-nu.vercel.app/"
      }
    },
    {
      title: "Radahn",
      type: "CLI Coding Agent",
      tech: "Python, Gemini 2.5 Flash, Git",
      desc: "A secure, CLI-based AI coding assistant that automates software engineering workflows. Implements structured function calling for sandboxed file operations with path traversal protection and token overflow limits.",
      links: { github: "https://github.com/KavyaNagariya/Radahn" }
    }
  ];

  return (
    <section className="projects section-divider" id="projects">
      <div className="projects-header">
        <h2 className="title">Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map((p, idx) => (
          <div key={idx} className="project-card">
            <div className="project-info">
              <div className="project-title-row">
                <h3>{p.title}</h3>
                <span className="project-type">{p.type}</span>
              </div>
              <p className="project-tech">{p.tech}</p>
              <p className="project-desc">{p.desc}</p>
              
              <div className="project-links">
                {p.links.github && (
                  <a href={p.links.github} target="_blank" rel="noreferrer" className="pill small-pill icon-only" title="View Source on GitHub" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                )}
                {p.links.live && (
                  <a href={p.links.live} target="_blank" rel="noreferrer" className="pill small-pill icon-only" title="Live Demo" aria-label="Live Demo">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
