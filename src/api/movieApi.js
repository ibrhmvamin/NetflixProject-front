const yourIpV4WirelessLanAdapterAddress = '10.0.2.2:5001';
const movieUrl = `http://${yourIpV4WirelessLanAdapterAddress}/api/v1/movie`;

const getTrendingMoviesAsync = async () => {
  try {
    const response = await fetch(`${movieUrl}/trending`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch trending movies');
    }

    return data;
  } catch (error) {
    console.error('Error in getTrendingMoviesAsync:', error);
    return {error: error.message};
  }
};

const getMovieDetailsByIdAsync = async movieId => {
  try {
    const response = await fetch(`${movieUrl}/${movieId}/details`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch movie details');
    }

    return data;
  } catch (error) {
    console.error('Error in getMovieDetailsByIdAsync:', error);
    return {error: error.message};
  }
};

const getMovieTrailersByIdAsync = async (movieId, token) => {
  try {
    const response = await fetch(`${movieUrl}/${movieId}/trailers`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch movie trailers');
    }

    return data;
  } catch (error) {
    console.error('Error in getMovieTrailersByIdAsync:', error);
    return {error: error.message};
  }
};

const getSimilarMoviesByIdAsync = async (movieId, token) => {
  try {
    const response = await fetch(`${movieUrl}/${movieId}/similar`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch similar movies');
    }

    return data;
  } catch (error) {
    console.error('Error in getSimilarMoviesByIdAsync:', error);
    return {error: error.message};
  }
};

const getMoviesByCategoryAsync = async (category, token) => {
  try {
    const response = await fetch(`${movieUrl}/${category}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch movies by category');
    }

    return data;
  } catch (error) {
    console.error('Error in getMoviesByCategoryAsync:', error);
    return {error: error.message};
  }
};

export {
  getTrendingMoviesAsync,
  getMovieDetailsByIdAsync,
  getMovieTrailersByIdAsync,
  getSimilarMoviesByIdAsync,
  getMoviesByCategoryAsync,
};
