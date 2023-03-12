import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ThemeProvider from './Context/Context';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>
)