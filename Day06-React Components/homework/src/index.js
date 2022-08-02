import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import Alert from './components/AlertComponent';
import StudentTable from './components/StudentInfoComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại."/>);
// root.render(<StudentTable />)
