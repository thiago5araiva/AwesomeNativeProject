import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '_atoms/';
import { DEFAULT_THEME } from '_themes/';
export type ButtonPropTypes = {
  onPress: () => void;
  children?: React.ReactChildren;
  title: string;
  customStyle?: object;
  small?: boolean;
};

const ButtonComponent = ({
  onPress,
  children,
  title,
  customStyle,
  small,
}: ButtonPropTypes): JSX.Element => {
  const styles = bindStyles(small);

  return (
    <TouchableOpacity
      style={[styles.container, customStyle]}
      onPress={() => onPress()}>
      <Text type="descriptive" customStyle={styles.text}>
        {title}
      </Text>
      {children}
    </TouchableOpacity>
  );
};

const bindStyles = small => {
  const { colors } = DEFAULT_THEME;
  const size = small ? { height: 36, width: 160 } : { height: 48, width: 343 };

  console.log(size);
  const style = StyleSheet.create({
    container: {
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      width: size.width,
      height: size.height,
      backgroundColor: colors.primary,
      borderRadius: 25,
    },
    text: {
      fontFamily: 'Metropolis-Bold',
      color: 'white',
    },
  });

  return style;
};
export default ButtonComponent;
