import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App />
    <greeting name="haloo guys!"/> */}

    <BrowserRouter>

    <App/>
    
    </BrowserRouter>

    
    

  </React.StrictMode>,
)
