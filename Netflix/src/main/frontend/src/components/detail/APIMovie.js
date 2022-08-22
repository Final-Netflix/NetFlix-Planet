import React from 'react';
import PropTypes from "prop-types";

function Movie({poster_path, title, overview, genre_ids, id}) {
    return (
        <div className='text-white'>
            <img src={ "https://image.tmdb.org/t/p/w200" + poster_path } alt={ title }/>
            <h2>{ title }</h2>
            <p>{ overview }</p>
            <ul>{ genre_ids.map((genre) => (<li key={ genre }>{ genre }</li>))}</ul>
        </div>
    );
}
Movie.propTypes = {
    poster_path : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    overview : PropTypes.string.isRequired,
    genre_ids : PropTypes.arrayOf(PropTypes.number).isRequired
}
export default Movie;