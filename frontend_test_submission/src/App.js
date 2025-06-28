import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Home from './pages/Home';
import StatsPage from './components/StatsPage';
import LoggerProvider from './context/LoggerContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => (
  <ThemeProvider theme={theme}>
    <LoggerProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<StatsPage />} />
        </Routes>
      </Router>
    </LoggerProvider>
  </ThemeProvider>
);

export default App;