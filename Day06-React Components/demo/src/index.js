import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import HelloCC from './components/HelloCC';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<HelloCC person="Nam" />);

