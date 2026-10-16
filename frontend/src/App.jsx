import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';
// import './App.css'
import LandingPge from './pages/LandingPge'
import Authentication from './pages/Authentication';
import { AuthProvider } from './contexts/AuthContex';
import SignUp from './pages/SignUp';
import { VideoMeet } from './pages/VideoMeet';
// import { from } from 'node:stream/iter'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
   
      <BrowserRouter>
        <AuthProvider>
        <Routes>
          <Route path="/" element = {<LandingPge/>}/>
          <Route path="/home"/>
          <Route path="/auth" element={<SignUp/>}/> 
          <Route path='/:url' element={<VideoMeet/>}/>
        </Routes> 
        </AuthProvider>
      </BrowserRouter>

    </>
  )
}

export default App

