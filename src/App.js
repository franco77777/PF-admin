import Login from "./components/login/Login"
import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
