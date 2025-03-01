import React from 'react';
import {FlatList, Text, View, Image} from 'react-native';

const HeaderAndMoviesTvShows = ({title, list}) => {
  return (
    <View className="mb-6">
      <Text className="mb-2 text-white font-montSerrat">{title}</Text>
      <FlatList
        data={list}
        horizontal
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View className="mr-2 w-[115px] h-[165px] rounded-lg">
            <Image
              source={{
                uri: 'https://image.tmdb.org/t/p/original' + item.poster_path,
              }}
              className="w-full h-full rounded-md"
            />
          </View>
        )}
      />
    </View>
  );
};

export default HeaderAndMoviesTvShows;
