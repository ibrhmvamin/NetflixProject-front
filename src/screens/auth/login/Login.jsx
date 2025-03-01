import {Image, Text, TouchableOpacity, View, Alert} from 'react-native';
import React, {useState} from 'react';
import Input from '../../../common/Input';
import Button from '../../../common/Button';
import netflixLogo from '../../../../assets/images/netflixLogo.png';
import {useNavigation} from '@react-navigation/native';
import {useMMKVBoolean, useMMKVString} from 'react-native-mmkv';
import {loginUser} from '../../../api/authApi';

const Login = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [token, setToken] = useMMKVString('token');

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    try {
      setLoading(true);
      const result = await loginUser(formData);

      if (result?.success && result?.token) {
        setToken(result.token);
        Alert.alert('Success', 'Login successful!');
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', result?.message || 'Invalid login credentials.');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };
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
        secureTextEntry
      />
      <Button
        className="border-[1px] w-full items-center justify-center py-3"
        title={loading ? 'Signing In...' : 'Sign In'}
        onPress={handleLogin}
        disabled={loading}
      />
      <View className="flex-row justify-center items-center gap-2">
        <Text className="font-montSerrat text-gray-500">New to Netflix?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text className="font-montSerrat text-white"> Sign up now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
