import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from './components/context/Context.jsx';
import App from './App.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AppProvider>
     <App />
        
        <ToastContainer style={{zIndex : "9999999999999"}}  position="top-center" />
  </AppProvider>
  </React.StrictMode>
)
