import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home/home'
import SignInPage from './pages/Auth/SignInPage'
import SignUpPage from './pages/Auth/SignUpPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth/login" element={<SignInPage/>}/>
        <Route path="/auth/signup" element={<SignUpPage/>}/>
      </Routes>
    </>
  )
}

export default App
