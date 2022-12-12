import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import List from './pages/List'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
