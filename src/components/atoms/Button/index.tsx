import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import { ButtonTypes } from './types';

const ButtonComponent = ({
  onPress,
  children,
  title,
}: ButtonTypes): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
      <Text style={styles.text}>{title}</Text>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 153,
    height: 28,
    backgroundColor: '#EE1D23',
    borderRadius: 5,
  },
  text: {
    fontFamily: 'Metropolis-Bold',
    color: 'white',
  },
});

export default ButtonComponent;
