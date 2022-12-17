import { useState,useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import './App.css'
import "./style/navbar.css"
import Cards from './components/Cards'
import Details from './components/Details'
import logo from "./assets/logo.png"


function App() {
  const [cards, setCards] = useState([])
  const [filterdata, setFilterdata]= useState([]);
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=ac0f6066dac6b62088f80248468d7bfb&language=en-US')
    .then(res =>{
      setCards(res.data.results)
      console.log(res.data)
      setFilterdata(res.data.results);

    })
    .catch(error =>{
      console.log(error)
    })
  }, [])

  const handlesearch=(event)=>{
    const getSearch= event.target.value; 
    if(getSearch.length > 0)
    {     
     const searchdata= cards.filter( (item)=> item.original_title.toLowerCase().includes(getSearch));
     setCards(searchdata);
    } else {
      setCards(filterdata);
    }
    setQuery(getSearch);
  }


  return (
    <div className="App" id='blur' >

      <div>
        <div className="navbar">
            <img src={logo} alt="company logo"/>
            <div className='searchDiv' >
                <input className='search' type="text" value={query} onChange={(e)=>handlesearch(e)} placeholder=" 🔍 Search for a movie" />
            </div>
        </div>
        <div className="rectangle"></div>
      </div>


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
