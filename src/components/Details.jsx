import React from 'react'
import "../style/Details.css"
import cross from "../assets/cross.png"

export default function Details(props) {
    console.log(props)

  return (
    <div className='detailscon'>
        <div className='details' id="unblur">
            <div className='detailshead'>
                    <div className='title'>{props.data.original_title}</div>
                    <img className='close' src={cross} alt="close" onClick={()=>{props.popup(prev=>!prev)}}/>
            </div>
            <div className='detailsTextBox'>
                <img className='descript' src={"https://www.themoviedb.org/t/p/w220_and_h330_face"+props.data.poster_path} alt='Poster' />
                <div className='descrip'>
                    <p>Release date: {props.data.release_date}</p>
                    <p>{props.data.overview}</p>
                    <p>{props.data.vote_average}/({props.data.vote_count} total votes)</p>
                </div>
            </div>
        </div>
    </div> 
  )
}
