import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home/home'
import SignInPage from './pages/Auth/SignInPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth/login" element={<SignInPage/>}/>
        <Route path="/auth/signup" element={<>Sign Up Page</>}/>
      </Routes>
    </>
  )
}

export default App
