import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../../../common/Input';
import Button from '../../../common/Button';
import netflixLogo from '../../../../assets/images/netflixLogo.png';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const [formData, setFormData] = useState({});
  const navigation = useNavigation();
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
        Sign Up
      </Text>
      <Input placeholder="Username" setFormData={setFormData} name="username" />
      <Input placeholder="Email" setFormData={setFormData} name="email" />
      <Input placeholder="Password" setFormData={setFormData} name="password" />
      <Button
        className="border-[1px] w-full items-center justify-center py-3"
        title="Sign Up"
      />
      <View className="justify-center items-center gap-2">
        <Text className="font-montSerrat text-gray-500">
          Already have a Netflix account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text className="font-montSerrat text-white"> Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
