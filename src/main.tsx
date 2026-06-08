import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/leader" element={<App leaderMode />} />
        <Route path="/leader/entry" element={<App leaderMode leaderTab="entry" />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
