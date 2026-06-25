import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import UptimeKuma from './pages/projects/UptimeKuma'
import ProjectComingSoon from './pages/projects/ProjectComingSoon'

function App() {
  return (
    <HashRouter>
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
