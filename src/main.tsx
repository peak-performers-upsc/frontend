import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { StyledEngineProvider } from '@mui/material';
import ThemeProvider from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
)
