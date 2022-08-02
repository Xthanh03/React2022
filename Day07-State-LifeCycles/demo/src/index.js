import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountClick from './components/CountClick';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);