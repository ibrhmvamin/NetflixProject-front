import React, {useEffect, useState} from 'react';
import {ScrollView, View, Image} from 'react-native';
import MainMovie from './components/MainMovie';
import {getTrendingMoviesAsync} from '../../api/movieApi';
import netflixLogo from '../../../assets/images/netflixLogo.png';
import {getTrendingTvShowsAsync} from '../../api/tvShowApi';
import HeaderAndMoviesTvShows from '../../common/HeaderAndMoviesTvShows';
import Button from '../../common/Button';
import {useMMKVString} from 'react-native-mmkv';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularTvShows, setPopularTvShows] = useState([]);
  const [token, setToken] = useMMKVString('token');

  const buttonOnSubmit = () => {
    setToken('');
  };

  const fetchTrendingMovies = async () => {
    try {
      const response = await getTrendingMoviesAsync();
      setTrendingMovies(response?.content || []);
    } catch (error) {
      console.error('Error fetching trending movies:', error);
    }
  };

  const fetchPopularTvShows = async () => {
    try {
      const response = await getTrendingTvShowsAsync();
      setPopularTvShows(response?.content || []);
    } catch (error) {
      console.error('Error fetching popular tv shows:', error);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
    fetchPopularTvShows();
  }, []);

  return (
    <ScrollView className="bg-black">
      <View className="p-5">
        {/* Netflix Logo & Logout Button Wrapper */}
        <View className="flex-row justify-between items-center mb-4">
          <Image
            source={netflixLogo}
            resizeMode="contain"
            className="w-28 h-12"
          />
          <Button
            title="Sign Out"
            onPress={buttonOnSubmit}
            className="bg-red-600 px-4 py-2 rounded-md border border-red-700"
            textClassName="text-white font-bold text-lg"
          />
        </View>

        {/* Main Movie Section */}
        <MainMovie />

        {/* Trending Movies & Popular TV Shows */}
        <HeaderAndMoviesTvShows title="Trending Movies" list={trendingMovies} />
        <HeaderAndMoviesTvShows
          title="Popular TV Shows"
          list={popularTvShows}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
