import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { DashBoard } from './pages/DashBoard'
import { Landing } from './pages/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<DashBoard/>}></Route>
        <Route path='/' element={<Landing/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
