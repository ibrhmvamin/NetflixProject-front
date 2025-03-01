import React from 'react';
import {Text, View} from 'react-native';
import {useMMKVString} from 'react-native-mmkv';
import Button from '../../common/Button';

const Profile = () => {
  const [token, setToken] = useMMKVString('token');
  const buttonOnSubmit = () => {
    setToken('');
  };
  return (
    <View>
      <Text>Token : {token}</Text>
      <Button
        title="Refresh Token"
        onPress={buttonOnSubmit}
        className="border-[1px]"
      />
    </View>
  );
};

export default Profile;
