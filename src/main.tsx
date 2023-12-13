import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Pages

import './global.scss'
import { Login } from './pages/Login'
import { CountdownPage } from './pages/Countdown'
import { Aside } from './components/Aside'
import { Ranking } from './pages/Ranking'
import { CountdownProvider } from './contexts/CountdownContext'
import { ChallengeProvider } from './contexts/ChallengeContext'
import { UserAuthProvider } from './contexts/UserAuthContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="PageRouterWrapper">
        <Aside />
        <UserAuthProvider>
          <ChallengeProvider>
            <CountdownProvider>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/countdown" element={<CountdownPage />} />
                <Route path="/ranking" element={<Ranking />} />
              </Routes>
            </CountdownProvider>
          </ChallengeProvider>
        </UserAuthProvider>
      </div>
    </BrowserRouter>
  </React.StrictMode>
)
