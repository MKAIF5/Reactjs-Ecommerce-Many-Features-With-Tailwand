import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter future={{
      v7_startTransition: true,
    }}>
      <App />
    </BrowserRouter>
  </StrictMode>
)
