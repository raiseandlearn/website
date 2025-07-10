import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import RecentEventsPage from './pages/RecentEvents'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recent-events" element={<RecentEventsPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
