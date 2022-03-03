import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

export type ContainerPropTypes = {
  children: React.ReactElement | any;
  customStyle?: object;
};

const ContainerComponent = ({
  children,
  customStyle,
}: ContainerPropTypes): JSX.Element => {
  return <View style={[styles.container, customStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
export default ContainerComponent;
