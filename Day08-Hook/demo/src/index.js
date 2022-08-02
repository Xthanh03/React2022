import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClickCount from './components/ClickCount';
import Selector from './components/Selector';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Selector />);



