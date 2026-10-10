import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home/Home.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import LoginSignup from './pages/LoginSignup/LoginSignup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    {/* <Dashboard /> */}
    {/* <LoginSignup /> */}



  </StrictMode>,
)
