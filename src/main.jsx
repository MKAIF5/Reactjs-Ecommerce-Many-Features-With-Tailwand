import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import { store } from "./Components/feauters/store.jsx";
import { Provider } from 'react-redux';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter future={{
        v7_startTransition: true,
      }}>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
