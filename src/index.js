import React from 'react';
import { App } from './components/app/app';
import { createRoot } from 'react-dom/client';
import { words } from './data';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App words={words} />
  </React.StrictMode>
);



