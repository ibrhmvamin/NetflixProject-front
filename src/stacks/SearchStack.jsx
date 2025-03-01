import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from '../screens/search/Search';

const Stack = createNativeStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default SearchStack;
