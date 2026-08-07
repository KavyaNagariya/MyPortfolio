import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import './GithubHeatmap.css';

const GithubHeatmap = () => {
  const minimalTheme = {
    light: ['var(--heatmap-0)', 'var(--heatmap-1)', 'var(--heatmap-2)', 'var(--heatmap-3)', 'var(--heatmap-4)'],
    dark: ['var(--heatmap-0)', 'var(--heatmap-1)', 'var(--heatmap-2)', 'var(--heatmap-3)', 'var(--heatmap-4)'],
  };

  return (
    <section className="heatmap-section section-divider">
      <div className="heatmap-container">
        <GitHubCalendar 
          username="KavyaNagariya" 
          theme={minimalTheme}
          colorScheme="dark"
          fontSize={12}
          blockSize={12}
          blockMargin={4}
          style={{
            fontFamily: 'var(--font-sans)',
            color: 'var(--text-secondary)'
          }}
        />
      </div>
    </section>
  );
};

export default GithubHeatmap;
