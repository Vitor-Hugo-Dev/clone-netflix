/* eslint-disable no-magic-numbers */
import React, { useState } from 'react';
import './MovieRow.css';
import propTypes from 'prop-types';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';

function MovieRow({ title, items }) {
  const [leftMargin, setLeftMargin] = useState(-450);
  const movieLeft = () => {
    let x = leftMargin + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setLeftMargin(x);
  };

  const movieRight = () => {
    let x = leftMargin - Math.round(window.innerWidth / 2);
    const listW = items.results.length * 150; // 150 tamanho do card
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60; // 60 tamanho dos paddings, 30 de cada lado
    }
    setLeftMargin(x);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow-left">
        <NavigateBefore style={ { fontSize: 50 } } onClick={ movieLeft } />
      </div>
      <div className="movieRow-right">
        <NavigateNext style={ { fontSize: 50 } } onClick={ movieRight } />
      </div>

      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={ {
            marginLeft: leftMargin,
            width: items.results.length * 150 } }
        >
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
