import React from 'react';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../Action-creators/toggleFavorite';
import './Card.css'


export const Card = ({ title , poster_path , overview , release_date , favorited, toggleFavorites, id }) => {
  return (
    <div className='card'>
      <h1 className='movie-title'>{title}</h1>
      <input
       onClick={() => toggleFavorites(id)}
       type='button'
       value='Favorite'/>
      <img src={'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + poster_path} alt={`This is the poster for the movie "${title}" in theaters ${release_date}.`} />
      <p>{overview}</p>
      <p>{release_date}</p>
    </div>
  )
}

export const mapDispatchToProps = dispatch => ({
  toggleFavorites: (id) => dispatch(toggleFavorite(id))
})

export default connect(null, mapDispatchToProps)(Card);