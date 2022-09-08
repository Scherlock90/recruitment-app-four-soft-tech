import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from 'src/app/index';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(<App />);