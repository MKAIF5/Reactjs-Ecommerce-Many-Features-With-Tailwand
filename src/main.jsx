import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter future={{
      v7_startTransition: true,
    }}>
      <App />
    </BrowserRouter>
  </StrictMode>
)
