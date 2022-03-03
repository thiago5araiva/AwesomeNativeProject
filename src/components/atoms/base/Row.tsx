import { View, StyleSheet } from 'react-native';
import React from 'react';

export type RowPropTypes = {
  children: React.ReactElement[] | React.ReactElement;
  align?: string;
};

const RowComponent = ({ children, align }: RowPropTypes): JSX.Element => {
  const bindStyles = {
    ...styles['container'],
    justifyContent: align ? align : 'flex-start',
  };
  return <View style={[styles.container, bindStyles]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default RowComponent;
