import React from 'react';
import { App } from './components/app/app';
import { createRoot } from 'react-dom/client';
import { finishedItems, selectedItems, words } from './data';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App words={words} selectedItems={selectedItems} finishedItems={finishedItems} />
  </React.StrictMode>
);



