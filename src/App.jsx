import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import EventsPage from './pages/Events'
import UpcomingPage from './pages/Upcoming'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
