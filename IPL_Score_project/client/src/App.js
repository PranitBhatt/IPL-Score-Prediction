// import { useEffect, useState } from "react"
import React  from 'react'
import Register from "./components/register"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home'
import Login from './components/login'
import Layout from './components/layout';
import ScorePredictor from './components/ScorePredictor';

export default function App() {
  // const [data, setData] = useState([{}])

  // useEffect(() => {
  //   fetch("http://127.0.0.1:5000/members")
  //     .then(response => response.json())
  //     .then(data => {setData(data)
  //       console.log(data)
  //     })
  // }, [])
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/scorePredictor" element={<ScorePredictor />} />
      </Routes>
    </BrowserRouter>
//<Home />
  //  <Register />
  )
}
