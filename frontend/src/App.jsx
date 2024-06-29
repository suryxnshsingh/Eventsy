import { useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'
import { Signup } from './assets/components/forms/signup'
import { Signin } from './assets/components/forms/signin'
import { Dashboard } from './assets/components/dashboard'
import { Profile } from './assets/components/profile/profile'
import { Navbar } from './assets/components/nav/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <BrowserRouter>
        <Navbar/>
        <main style={{ padding: '30px' }}>
        <Routes>
          <Route path = '/' element = {<Dashboard/>}></Route>
          <Route path = '/profile' element={<Profile/>}></Route>
          <Route path = '/signup' element = {<Signup/>}></Route>
          <Route path = '/signin' element = {<Signin/>}></Route>
          <Route path = '/profile' element = {<Profile />} />
        </Routes>
        </main>
      </BrowserRouter>

    </div>
  )
}
export default App
