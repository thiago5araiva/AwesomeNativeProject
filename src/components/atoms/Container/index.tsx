import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { ContainerTypes } from './types';

const ContainerComponent = ({
  children,
  customStyle,
}: ContainerTypes): JSX.Element => {
  return <View style={[styles.container, customStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
export default ContainerComponent;
