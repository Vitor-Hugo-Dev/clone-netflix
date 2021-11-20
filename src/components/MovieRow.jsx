import React from 'react';
import './MovieRow.css';
import propTypes from 'prop-types';

function MovieRow({ title, items }) {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--listarea">

        <div className="movieRow--list">
          {items.results.length > 0 && items.results.map((item, key) => ((
            <div className="movieRow--item" key={ key }>
              <img src={ `https://image.tmdb.org/t/p/w300${item.poster_path}` } alt={ item.original_title } />
            </div>
          )))}
        </div>

      </div>
    </div>
  );
}

MovieRow.propTypes = {
  title: propTypes.string.isRequired,
  items: propTypes.arrayOf().isRequired,
};

export default MovieRow;
