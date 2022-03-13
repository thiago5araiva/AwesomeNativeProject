import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
export type ContainerPropTypes = {
  children: React.ReactElement | React.ReactElement[];
  customStyle?: object;
};

const ContainerComponent = ({
  children,
  customStyle,
}: ContainerPropTypes): JSX.Element => {
  return <View style={[styles.container, customStyle]}>{children}</View>;
};
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.03,
  },
});
export default ContainerComponent;
