// App.jsx
import React, { useState } from 'react';
import './App.css';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FinanceProvider } from './context/FinanceContext';
import { lightTheme, darkTheme } from './theme';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Sidebar from './components/Sidebar';
import DarkModeToggle from './components/DarkModeToggle';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <FinanceProvider>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <BrowserRouter>
            <ScrollToTop />
            <Box sx={{ display: 'flex', minHeight: '100vh' }}>
              <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                  <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                </Box>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/transactions" element={<Transactions />} />
                </Routes>
              </Box>
            </Box>
          </BrowserRouter>
        </LocalizationProvider>
      </ThemeProvider>
    </FinanceProvider>
  );
}
