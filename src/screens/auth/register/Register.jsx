import {Image, Text, TouchableOpacity, View, Alert} from 'react-native';
import React, {useState} from 'react';
import Input from '../../../common/Input';
import Button from '../../../common/Button';
import netflixLogo from '../../../../assets/images/netflixLogo.png';
import {useNavigation} from '@react-navigation/native';
import {registerUser} from '../../../api/authApi';

const Register = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleRegister = async () => {
    if (!formData.username || !formData.email || !formData.password) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    try {
      setLoading(true);
      const response = await registerUser(formData);

      if (response?.success) {
        Alert.alert('Success', 'Registration successful! Please log in.');
        navigation.navigate('Login');
      } else {
        Alert.alert('Error', response?.message || 'Registration failed.');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
      console.error('Registration error:', error);
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
        Sign Up
      </Text>
      <Input placeholder="Username" setFormData={setFormData} name="username" />
      <Input placeholder="Email" setFormData={setFormData} name="email" />
      <Input
        placeholder="Password"
        setFormData={setFormData}
        name="password"
        secureTextEntry={true}
      />
      <Button
        className="border-[1px] w-full items-center justify-center py-3"
        title={loading ? 'Signing Up...' : 'Sign Up'}
        onPress={handleRegister}
        disabled={loading}
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
