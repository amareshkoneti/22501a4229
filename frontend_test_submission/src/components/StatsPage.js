import React, { useEffect, useState } from 'react';
import { useLogger } from '../context/LoggerContext';

const StatsPage = () => {
  const [stats, setStats] = useState([]);
  const { log } = useLogger();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('urlStats')) || [];
    setStats(stored);
    log('Loaded stats page');
  }, [log]);

  return (
    <div>
      <h2>Statistics</h2>
      {stats.map((s, idx) => (
        <div key={idx}>
          <p><strong>URL:</strong> {s.url}</p>
          <p><strong>Clicks:</strong> {s.clicks}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsPage;
