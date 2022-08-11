import React, { useEffect, useState } from 'react';
import Movie from './Movie';

// https://velog.io/@jahommer/React-app6-TMDB-API

const Test = () => {

    const KEY = "bc61587b22cd0e5226a33d30e467d867";
    const URL = "https://api.themoviedb.org/3/movie/"

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const json = await(
            await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${ KEY }&query=28`)
            ).json();
        setMovies(json.results);
        setLoading(false);
        getGenre();
    }

    const getGenre = async () => {
        const json = await(
            await fetch(
                `https://api.themoviedb.org/3/genre/movie/list?api_key=${ KEY }`)
            ).json();

        console.log("hihihi | " + JSON.stringify(json));
    }

    useEffect(() => {
        getMovies();
    }, [])

    return (
        <div>
            { 
                loading ? <h1>Loading... </h1> :
                <div>{ movies.map(movie =>
                        <Movie
                            key={ movie.id }
                            poster_path={ movie.poster_path }
                            title={ movie.title }
                            overview={ movie.overview }
                            genre_ids={ movie.genre_ids }
                        />) } 
                </div>
            }   
        </div>
    );
};

export default Test;