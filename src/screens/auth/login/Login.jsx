import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../../../common/Input';
import Button from '../../../common/Button';
import netflixLogo from '../../../../assets/images/netflixLogo.png';
import {useNavigation} from '@react-navigation/native';
import {useMMKVBoolean} from 'react-native-mmkv';

const Login = () => {
  const [formData, setFormData] = useState({});
  const navigation = useNavigation();
  const [hasSeenOnboarding, setHasSeenOnboarding] =
    useMMKVBoolean('hasSeenOnboarding');
  return (
    <View className="flex-1 items-center justify-center px-4 gap-5 bg-black">
      <View className="absolute top-0 left-0 p-4">
        <Image
          source={netflixLogo}
          resizeMode="contain"
          style={{width: 100, height: 40}}
        />
      </View>
      <Text className="font-montSerratBold text-[25px] text-white self-start">
        Sign In
      </Text>
      <Input placeholder="Enter Email" setFormData={setFormData} name="email" />
      <Input
        placeholder="Enter Password"
        setFormData={setFormData}
        name="password"
      />
      <Button
        className="border-[1px] w-full items-center justify-center py-3"
        title="Sign In"
      />
      <View className="flex-row justify-center items-center gap-2">
        <Text className="font-montSerrat text-gray-500">New to Netflix?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text className="font-montSerrat text-white"> Sign up now</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => setHasSeenOnboarding(false)}>
        {/* <Text className="font-montSerratLightItalic text-white">
          Set hasSeenOnboarding to False
        </Text> */}
      </TouchableOpacity>
    </View>
  );
};

export default Login;
