import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Pages

import './global.scss'
import { Login } from './pages/Login'
import { Countdown } from './pages/countdown'
import { Aside } from './components/Aside'
import { Ranking } from './pages/Ranking'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="PageRouterWrapper">
        <Aside />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/countdown" element={<Countdown />} />
          <Route path="/ranking" element={<Ranking />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
)
