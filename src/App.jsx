import { useState,useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  const [search, setSearch] = useState()  

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res =>{
      console.log(res.data)
    })
    .catch(error =>{
      console.log(error)
    })
  }, [])
  

  return (
    <BrowserRouter className="App">
      <Navbar />
      <Cards />

    </BrowserRouter>
  )
}

export default App
