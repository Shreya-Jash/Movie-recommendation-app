import { useState,useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Details from './components/Details'

function App() {
  const [cards, setCards] = useState([])
  const [search, setSearch] = useState()  

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=ac0f6066dac6b62088f80248468d7bfb&language=en-US')
    .then(res =>{
      setCards(res.data.results)
      console.log(res.data)
    })
    .catch(error =>{
      console.log(error)
    })
  }, [])

  function handleChange(e)
  {
    setSearch(e.target.value);
  }

  return (
    <div className="App" id='blur' >
      <Navbar handleChange={handleChange}/>
      <h2>Most Recent Movies</h2>
      <section className='gridContainer'>
        {cards.map((movie,index)=>{
          return (
            <Cards 
              key={index} 
              {...movie}
            />
          )
        })}
      </section>
    </div>
  )
}

export default App
