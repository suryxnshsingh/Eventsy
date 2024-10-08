import { useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import { AuthProvider } from './contexts/authContext'
import './App.css'
import { Signup } from './assets/components/forms/signup'
import { Signin } from './assets/components/forms/signin'
import { Dashboard } from './assets/components/dashboard'
import { Profile } from './assets/components/profile/profile'
import { Navbar } from './assets/components/nav/navbar'
import { AboutUs } from './assets/components/about/aboutus'
import { WhyEventsy } from './assets/components/whyEventsy/whyEventsy'
import EventList from './assets/components/events/eventList'
import EventDetail from './assets/components/events/eventDetail'
import EventForm from './assets/components/events/eventForm'
import Page404 from './assets/components/Page404'

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navbar/>
          <main style={{ padding: '30px' }}>
          <Routes>
            <Route path = '/' element = {<Dashboard/>}></Route>
            <Route path = '/profile' element={<Profile/>}></Route>
            <Route path = '/signup' element = {<Signup/>}></Route>
            <Route path = '/signin' element = {<Signin/>}></Route>
            <Route path = '/profile' element = {<Profile />} />
            <Route path = '/aboutus' element = {<AboutUs />} />
            <Route path = '/whyeventsy' element = {<WhyEventsy/>} />
            <Route path = '/events' element = {<EventList/>} />
            <Route path = "/events/:id" element={<EventDetail />} />
            <Route path = "/form" element={<EventForm />} />
            <Route path = "/events/edit/:id" element={<EventForm />} />
            <Route path = "/*" element={<Page404 />} /> 
          </Routes>
          </main>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}
export default App
