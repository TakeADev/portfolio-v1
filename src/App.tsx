import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  return (
    <Router>
      <Navigation />
      <Hero />
      <About />
    </Router>
  )
}

export default App
