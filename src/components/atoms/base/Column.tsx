import { View, Text } from 'react-native';
import React from 'react';

type ColumnPropTypes = {
  children: React.ReactElement[] | React.ReactElement;
  customStyle?: object;
};

const ColumnComponentBase = ({ children, customStyle }: ColumnPropTypes) => {
  return <View style={customStyle}>{children}</View>;
};

export default ColumnComponentBase;
