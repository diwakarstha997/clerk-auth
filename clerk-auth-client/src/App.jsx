import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home/home'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth/login" element={<>Login Page</>}/>
      </Routes>
    </>
  )
}

export default App
