import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { UserContext } from '_contexts/';

const AboutScreen = () => {
  const { state, setState } = useContext(UserContext);

  return (
    <View>
      <Text>{state.name}</Text>
    </View>
  );
};

export default AboutScreen;
