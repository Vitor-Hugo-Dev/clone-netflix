/* eslint-disable react/jsx-max-depth */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import PropTypes from 'prop-types';
import React from 'react';
import './FeatureMovie.css';
import { BsFillPlayFill } from 'react-icons/bs';

const FeatureMovie = ({ item }) => {
  const firstDate = new Date(item.first_air_date);

  const genres = [];

  for (const i in item.genres) {
    genres.push(item.genres[i].name);
  }

  console.log(item);

  return (
    <section
      className="featured"
      style={ {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      } }
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featued--infos">
            <div className="featured--points">{`${item.vote_average} pontos`}</div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--seasons">
              {`${item
                .number_of_seasons} temporada${item
                .number_of_seasons !== 1 ? 's' : ''}`}
            </div>
            <div className="featured--description">{item.overview}</div>
            <div className="featured--buttons">
              <button
                className="watchButton"
                type="button"
              >
                <BsFillPlayFill />
                Assistir
              </button>
              <button
                className="myListButton"
                type="button"
              >
                + Minha Lista
              </button>
            </div>
            <div className="featured--genres">
              <strong>Gêneros: </strong>
              {genres.join(', ')}
            </div>
          </div>
        </div>
      </div>
    </section>);
};

FeatureMovie.propTypes = {
  item: PropTypes.shape({
    original_name: PropTypes.string,
    backdrop_path: PropTypes.string,
    vote_average: PropTypes.string,
    overview: PropTypes.string,
    number_of_seasons: PropTypes.string,
    first_air_date: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })),
  }).isRequired,
};

export default FeatureMovie;
