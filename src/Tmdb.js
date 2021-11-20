const API_KEY = 'e8fdb4c582e35c09e5d6444594511a61';
const API_BASE = 'https://api.themoviedb.org/3/';

const fetchApi = async (endpoint) => {
  const response = await fetch(`${API_BASE}${endpoint}language=pr-BR&api_key${API_KEY}`);
  const json = await response.json();
  return json;
};

export default {
  getHomeList: async () => [
    {
      slug: 'originals',
      title: 'Originais do Netflix',
      items: await
      fetchApi('discover/tv?with_network=213&'),
    },
    {
      slug: 'trending',
      title: 'Recomendados para Você',
      items: await
      fetchApi('trending/all/week?'),
    },
    {
      slug: 'toprated',
      title: 'Em Alta',
      items: await
      fetchApi('movie/top_rated?'),
    },
    {
      slug: 'action',
      title: 'Ação',
      items: await
      fetchApi(`discover/tv?with_network=213&language=pr-BR&api_key${API_KEY}`),
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      items: await
      fetchApi(`discover/tv?with_network=213&language=pr-BR&api_key${API_KEY}`),
    },
    {
      slug: 'originals',
      title: 'Originais do Netflix',
      items: await
      fetchApi(`discover/tv?with_network=213&language=pr-BR&api_key${API_KEY}`),
    },
  ],
};
