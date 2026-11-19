import './App.css'
import Menu from './Menu.jsx'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import NotFound from './NotFound.jsx'
import Client from './Client.jsx'

function App() {

  return (
    <>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />} end={true} />
        <Route path="/about" element={<About />} end={true} />
        <Route path="/contact" element={<Contact />} end={true} />
        <Route path="/client/:id" element={<Client />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
