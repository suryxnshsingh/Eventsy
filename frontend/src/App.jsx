import { useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'
import { Navbar } from './assets/components/navbar'
import { Signup } from './assets/components/signup'
import { Signin } from './assets/components/signin'
import { Dashboard } from './assets/components/dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{background : 'khaki'}}>

      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = '/' element = {<Dashboard/>}></Route>
          <Route path = '/signup' element = {<Signup/>}></Route>
          <Route path = '/signin' element = {<Signin/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
