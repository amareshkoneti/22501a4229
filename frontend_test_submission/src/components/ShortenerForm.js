import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useLogger } from '../context/LoggerContext';

const ShortenerForm = ({ onShorten }) => {
  const [url, setUrl] = useState('');
  const [expiry, setExpiry] = useState('');
  const [custom, setCustom] = useState('');
  const { log } = useLogger();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await log(`Shortening URL: ${url}`);
    onShorten(url, expiry, custom);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField label="URL" value={url} onChange={(e) => setUrl(e.target.value)} fullWidth required />
      <TextField label="Expiry (mins)" value={expiry} onChange={(e) => setExpiry(e.target.value)} type="number" fullWidth />
      <TextField label="Custom Shortcode" value={custom} onChange={(e) => setCustom(e.target.value)} fullWidth />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>Shorten</Button>
    </Box>
  );
};

export default ShortenerForm;