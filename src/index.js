import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./App.css";
import reportWebVitals from './reportWebVitals';
import { SnackbarProvider } from 'notistack';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SnackbarProvider maxSnack={3} preventDuplicate>
    <App />
    </SnackbarProvider>
);

reportWebVitals();
