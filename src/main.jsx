import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react';
import { BrowserRouter } from "react-router-dom";
import { store } from "./Components/feauters/store.jsx";
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import App from './App.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter future={{
        v7_startTransition: true,
      }}>
        <App />
        <Toaster/>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
