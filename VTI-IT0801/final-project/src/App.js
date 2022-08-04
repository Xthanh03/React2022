import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Create from './components/Create';
import Edit from './components/Edit';
import Footer from './components/Footer';
import Home from './components/Home';
import Header from './components/Header';

function App() {
    return (
        <div className="App">
            <Header />
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/edit' element={<Edit />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );

}

export default App;