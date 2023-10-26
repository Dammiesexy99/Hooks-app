import React from 'react'

const MovieCard = ({title, url,rating,year,}) => {
  return (
    <div>
            <img src={url} alt=""  /> 
            <h2>{title}</h2>
            <p>{year}</p>
            <p>{rating}</p>
        <h3></h3>
    </div>
  )
}

export default MovieCard