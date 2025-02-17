import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Aboutme from './Pages/Aboutme'
import CV from './Pages/CV'
import Projects from './Pages/Projects';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter basename='/cv-portal2'>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/aboutme" element={<Aboutme/>}/> 
        <Route exact path="/CV" element={<CV/>}/>
        <Route exact path="/projects" element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}



export default App
