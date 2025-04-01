import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Contact from './pages/Contacts'
import Service from './pages/Service'
// import "font-awesome/css/font-awesome.min.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className='w-full '>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/service' element={<Service/>}/>
          </Routes>
        </Router>
       
      </div>
      
  )
}

export default App
