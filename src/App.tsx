import { BrowserRouter as Router } from 'react-router-dom'

import Navigation from './components/nav/Navigation'
import Hero from './components/hero/Hero'
import About from './components/sections/About'
import AnimationContextProvider from './contexts/AnimationContext'
import Projects from './components/sections/projects/Projects'

import './App.css'

function App() {
  return (
    <Router>
      <AnimationContextProvider>
        <Navigation />
        <Hero />
        <About />
        <Projects />
      </AnimationContextProvider>
    </Router>
  )
}

export default App
