import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './components/nav/Navigation'
import Hero from './components/hero/Hero'
import About from './components/sections/About'
import AnimationContextProvider from './contexts/AnimationContext'

function App() {
  return (
    <Router>
      <AnimationContextProvider>
        <Navigation />
        <Hero />
        <About />
      </AnimationContextProvider>
    </Router>
  )
}

export default App
