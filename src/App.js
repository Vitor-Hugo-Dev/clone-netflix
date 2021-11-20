import React, { useEffect } from 'react';
import Tmdb from './Tmdb';

function App() {
  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista total
      const list = await Tmdb.getHomeList();
      console.log(list);
    };

    loadAll();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
