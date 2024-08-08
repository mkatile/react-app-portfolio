import React from 'react';
import ReactDOM from 'react-dom/client';  // Import the new 'react-dom/client' module
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create the root with 'createRoot'

root.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);

serviceWorker.unregister();




