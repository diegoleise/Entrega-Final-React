import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { AdminProvider } from './AdminContext.jsx'
import ContextProvider from './Context.jsx'
import { AuthProvider } from './AuthContext.jsx'
import { ToastContainer } from 'react-toastify'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Router>
      <ContextProvider>
        <AdminProvider>
          <AuthProvider>
            <App />
            <ToastContainer />
          </AuthProvider>
        </AdminProvider>
      </ContextProvider>
    </Router>
  </StrictMode>
)
