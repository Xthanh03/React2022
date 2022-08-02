import React, { Profiler } from 'react';
import './index.css';
import App from'./App';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigatorComp from './components/Day05/Navigator';
import CardComponent from './components/Day05/CardComponent';
import SignInForm from './components/Day05/signInForm';


//Exercise 1:
// alert(navigator.userAgent); (Hiển thị kiểu alert)

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<NavigatorComp />);

// Exercise 2:
// const students = ([
//     {
//     company: 'Alfreds Futterkiste',
//     contact: 'Maria Anders',
//     country: 'Germany'
//     },
//     {
//     company: 'Centro comercial Moctezuma',
//     contact: 'Francisco Chang',
//     country: 'Mexico'
//     },
//     {
//     company: 'Ernst Handel',
//     contact: 'Roland Mendel',
//     country: 'Austria'
//     },
//     {
//     company: 'Island Trading',
//     contact: 'Helen Bennett',
//     country: 'UK'
//     },
//     {
//     company: 'Laughing Bacchus Winecellars',
//     contact: 'Yoshi Tannamuri',
//     country: 'Canada'
//     },
//     {
//     company: 'Magazzini Alimentari Riuniti',
//     contact: 'Giovanni Rovelli',
//     country: 'Italy'
//     }
// ]
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<students />);


// Exercise 3
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<CardComponent />);

// Exercise 4:
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<SignInForm />);