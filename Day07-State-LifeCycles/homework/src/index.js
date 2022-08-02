import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormC from './components/FormC';
import Calculation from './components/Calculation';
import TodoList from './components/TodoList';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<TodoList />);
