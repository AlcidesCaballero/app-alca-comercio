import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './components/StateProvider';
import reducer, { initialState } from './reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </StateProvider>
    <div>esto es una prueba</div>
    
    
  </React.StrictMode>
);


reportWebVitals();
