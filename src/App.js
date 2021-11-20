import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista total
      const list = await Tmdb.getHomeList();
      setMovieList(list);
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      Header
      Destaque
      As listas
      Rodapé Picudo
    </div>
  );
}

export default App;
