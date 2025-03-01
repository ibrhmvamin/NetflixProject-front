import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeStack from './HomeStack';
import HomeIcon from '../../assets/icons/home.svg';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: 'red', // Active icon color
        tabBarInactiveTintColor: 'gray', // Inactive icon color
        tabBarStyle: {backgroundColor: 'black', paddingBottom: 5}, // Tab bar background
        tabBarIcon: ({color}) => {
          let IconComponent;

          if (route.name === 'HomeTab') {
            IconComponent = HomeIcon;
          }

          return IconComponent ? (
            <IconComponent width={25} height={25} fill={color || 'white'} />
          ) : null;
        },
      })}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{tabBarLabel: 'Home'}}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
