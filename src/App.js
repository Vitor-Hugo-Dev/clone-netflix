/* eslint-disable no-magic-numbers */
import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeatureMovie from './components/FeatureMovie';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState([]);
  const [headerBlack, setHeaderBlack] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista total
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando a lista de filmes em destaque
      const originals = list.filter((item) => item.slug === 'originals');
      const randomChosen = Math
        .floor(Math.random() * (originals[0].items.results.length - 1));
      const chosen = originals[0].items.results[randomChosen];
      const chosenData = await Tmdb.getMovieDetails(chosen.id, 'tv');
      setFeatureData(chosenData);
    };
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setHeaderBlack(true);
      } else {
        setHeaderBlack(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={ headerBlack } />
      {featureData
        && <FeatureMovie item={ featureData } />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={ key } title={ item.title } items={ item.items } />
        ))}
      </section>
      <Footer />

      {movieList.length <= 0 && (
        <div className="loading">
          <img
            src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
            alt="loading"
          />
        </div>)}
    </div>
  );
}

export default App;
