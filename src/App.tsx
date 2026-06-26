import { useEffect } from 'react'
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import UptimeKuma from './pages/projects/UptimeKuma'
import ProjectComingSoon from './pages/projects/ProjectComingSoon'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/uptime-kuma" element={<UptimeKuma />} />
        <Route path="/projects/:id" element={<ProjectComingSoon />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}

export default App
