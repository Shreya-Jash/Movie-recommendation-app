import React, { useLayoutEffect, useState } from 'react'
import "../style/cards.css"
import Details from './Details'

export default function Cards(props){

  const [popup, setPopup] = useState(false)

  function handleClick()
  {
    
    const Blur = document.getElementById("blur")
    Blur.style.webkitFilter = "blur(5px)";
    console.log(Blur)
    setPopup(prev=>!prev)
  }

  useLayoutEffect(() => {
    try{
        const UnBlur = document.getElementById("unblur")
    UnBlur.style.webkitFilter = "blur(0px)"; 
    console.log(UnBlur)
    }
    catch{console.log("error")}
  }, [])

  // if (popup) {
  //   const UnBlur = document.getElementById("unblur")
  //   // UnBlur.style.webkitFilter = "blur(5px)"; 
  //   console.log(UnBlur)
  // }///sute ja bas na sute ja
  
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


