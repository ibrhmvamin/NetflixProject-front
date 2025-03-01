import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useMMKVBoolean} from 'react-native-mmkv';

const Home = () => {
  const [hasSeenOnboarding, setHasSeenOnboarding] =
    useMMKVBoolean('hasSeenOnboarding');
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => setHasSeenOnboarding(false)}>
        <Text>Set OnBoardingSeen to False</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
