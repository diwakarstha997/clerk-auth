import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home/home'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
