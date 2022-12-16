import React from 'react'
import "../style/details.css"

function getPosterURL(posterpath){
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
  }

export default function Details({
    release_date,
    original_title,
    overview,
    vote_average,
    poster_path,
    vote_count,
    imgURL
}) {
  return (
    <div className='details'>
        <h1>{original_title}</h1>
        <button>close</button>
        <div className='detailsTextBox'>
            <img src={getPosterURL(poster_path)} alt='Poster' />
            <div>
                <p>Release date: {release_date}</p>
                <p>{overview}</p>
                <p>{vote_average}/({vote_count} total votes)</p>
            </div>
        </div>
    </div>
  )
}
