import React from 'react'
import "../style/cards.css"

function getPosterURL(posterpath){
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}

export default function Cards({
  release_date,
  original_title,
  overview,
  vote_average,
  poster_path,
  imgURL
}){
  return (
    <div className="cards">
      <div>
        <div className='rating'>{vote_average}</div>
        <img src={getPosterURL(poster_path)} alt='Poster'/>
        <h3 className='name'>{original_title}</h3>
      </div>
    </div>
  )
}