import React from 'react';
import { Movie } from './Movie';

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
            ) : (
                <h3> Sorry, we couldn't find anything</h3>
            )}
        </div>
    );
}

export { Movies };
