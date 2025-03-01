import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TabStack from './TabStack';
import AuthStack from './AuthStack';
import {useMMKVBoolean, useMMKVString} from 'react-native-mmkv';
import OnboardingScreen from '../screens/onBoarding/OnBoardingScreen';

function Navigation() {
  const [token, setToken] = useMMKVString('token');
  const [hasSeenOnboarding, setHasSeenOnboarding] =
    useMMKVBoolean('hasSeenOnboarding');

  return (
    <NavigationContainer>
      {!hasSeenOnboarding ? (
        <OnboardingScreen />
      ) : token !== '' && token !== null ? (
        <TabStack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
}

export default Navigation;
