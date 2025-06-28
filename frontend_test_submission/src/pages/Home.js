import React, { useState } from 'react';
import ShortenerForm from '../components/ShortenerForm';

const Home = () => {
  const [shortened, setShortened] = useState([]);

  const handleShorten = (url, expiry, custom) => {
    const code = custom || Math.random().toString(36).substring(2, 7);
    const newUrl = { url, code, expiry: expiry || 30, clicks: 0 };
    const stored = JSON.parse(localStorage.getItem('urlStats')) || [];
    stored.push(newUrl);
    localStorage.setItem('urlStats', JSON.stringify(stored));
    setShortened([...shortened, newUrl]);
  };

  return (
    <div>
      <ShortenerForm onShorten={handleShorten} />
    </div>
  );
};

export default Home;
