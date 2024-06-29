import { useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'
import { Signup } from './assets/components/forms/signup'
import { Signin } from './assets/components/forms/signin'
import { Dashboard } from './assets/components/dashboard'
import { Profile } from './assets/components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Dashboard/>}></Route>
          <Route path = '/profile' element={<Profile/>}></Route>
          <Route path = '/signup' element = {<Signup/>}></Route>
          <Route path = '/signin' element = {<Signin/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App
