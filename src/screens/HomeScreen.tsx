import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { AuthContext } from '_contexts/';

const HomeScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <View>
      <TouchableOpacity onPress={signOut}>
        <Text>HomeScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
