import { View, StyleSheet } from 'react-native';
import React from 'react';

export type RowPropTypes = { children: React.ReactElement[] };

const RowComponent = ({ children }: RowPropTypes): JSX.Element => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default RowComponent;
