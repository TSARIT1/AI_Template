import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Header'
import About from './About'
import Services from './Services'
import Section from './Section'
import Question from './Question'
import Footer from './Footer'
import Servicepage from './Servicepage'
import Aboutpage from './Aboutpage'
import Home from './Home'
import Contactpage from './Contactpage'
function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutpage" element={<Aboutpage />} />
        <Route path="/servicepage" element={<Servicepage />} />
        <Route path="/contactpage" element={<Contactpage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
