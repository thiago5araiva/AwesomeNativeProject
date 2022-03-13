import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export type LinkPropTypes = {
  type?: 'component' | 'navigation';
  title?: string;
  component?: boolean;
  children?: React.ReactElement | React.ReactElement[] | undefined;
  customStyle?: object;
  customPress?: () => void;
};

const LinkComponent = ({
  type,
  title,
  children,
  customPress,
  customStyle,
}: LinkPropTypes): JSX.Element => {
  const typeTest = type === 'component' ? 'Esta certo' : 'Esta Errado';
  console.log(typeTest);

  function handleWithLinkType(type) {
    const content = !title ? 'Lorem Ipsum' : title;
    return type !== 'component' ? <Text>{content}</Text> : children;
  }

  return (
    <TouchableOpacity onPress={customPress} style={customStyle}>
      {handleWithLinkType(type)}
    </TouchableOpacity>
  );
};

export default LinkComponent;
