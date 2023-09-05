import React, { useLayoutEffect, useState } from 'react'
import "../style/cards.css"
import Details from './Details'

export default function Cards(props){

  const [popup, setPopup] = useState(false)

  function handleClick()
  {
    window.scrollTo({ top: 25, behavior: "smooth" });
    setPopup(prev=>!prev)
  }
  
  return (
    <div>
      {popup && <Details popup={setPopup} data={props}/>} 
    <div className="cards" onClick={handleClick} >
      <div>
        <div className='rating'>{props.vote_average}</div>
        <img src={"https://www.themoviedb.org/t/p/w220_and_h330_face"+props.poster_path} alt='Poster'/>
        <h3 className='name'>{props.original_title}</h3>
      </div>
    </div>
    </div>
  )
}


