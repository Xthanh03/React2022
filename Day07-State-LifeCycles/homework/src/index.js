import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Calculation from './components/Calculation';
import FormComponent from './components/FormComponent';
import CardManager from './components/CardManager';



const container = document.getElementById('root');
const root = createRoot(container);
root.render(<CardManager />);
