const yourIpV4WirelessLanAdapterAddress = '192.168.1.79';
const movieUrl = `http://${yourIpV4WirelessLanAdapterAddress}/api/v1/movie`;

const getTrendingMoviesAsync = async () => {
  const response = await fetch(`${movieUrl}/trending`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  console.log(response.json());
  return response.json();
};

const getMovieDetailsByIdAsync = async movieId => {
  const response = await fetch(`${movieUrl}/${movieId}/details`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  console.log(response.json());
  return response.json();
};

const getMovieTrailersByIdAsync = async (movieId, token) => {
  const response = await fetch(`${movieUrl}/${movieId}/trailers`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response.json());
  return response.json();
};

const getSimilarMoviesByIdAsync = async (movieId, token) => {
  const response = await fetch(`${movieUrl}/${movieId}/similar`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response.json());
  return response.json();
};

const getMoviesByCategoryAsync = async (category, token) => {
  const response = await fetch(`${movieUrl}/${category}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response.json());
  return response.json();
};

const searchMoviesAsync = async (searchQuery, token) => {
  const response = await fetch(
    `http://${yourIpV4WirelessLanAdapterAddress}/api/v1/search/movie/${searchQuery}

`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );
  console.log(response.json());
  return response.json();
};

export {
  getTrendingMoviesAsync,
  getMovieDetailsByIdAsync,
  getMovieTrailersByIdAsync,
  getSimilarMoviesByIdAsync,
  getMoviesByCategoryAsync,
  searchMoviesAsync,
};
