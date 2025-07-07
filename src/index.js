import React from 'react';
import { App } from './components/app/app';
import { createRoot } from 'react-dom/client';
//import { results } from './data';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



