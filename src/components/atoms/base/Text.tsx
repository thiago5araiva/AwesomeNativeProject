import React from 'react';
import { Text, StyleSheet } from 'react-native';
import COLORS from '_constants/Colors';

export type TextPropTypes = {
  children: React.ReactElement | string;
  type:
    | 'heading'
    | 'headline'
    | 'title'
    | 'subtitle'
    | 'text'
    | 'descriptive'
    | 'description'
    | 'helper';
  customStyle?: object;
};

export type TypesText = {
  [key: string]: object;
};

const TextComponent = ({
  children,
  type,
  customStyle,
}: TextPropTypes): JSX.Element => {
  const typeOfText = (types: string): object => {
    const textTypes: TypesText = {
      heading: styles.heading,
      headline: styles.headline,
      title: styles.title,
      subtitle: styles.subtitle,
      text: styles.text,
      descriptive: styles.descriptive,
      description: styles.description,
      helper: styles.helper,
    };
    return textTypes[types];
  };

  return (
    <Text style={[styles.default, typeOfText(type), customStyle]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  default: {
    fontFamily: 'Metropolis-Regular',
  },
  heading: {
    fontSize: 34,
    lineHeight: 34,
    fontFamily: 'Metropolis-Bold',
  },
  headline: {
    fontSize: 34,
    lineHeight: 29,
    fontFamily: 'Metropolis-Bold',
  },
  title: { fontSize: 18, lineHeight: 22, fontFamily: 'Metropolis-Bold' },
  subtitle: { fontSize: 16, lineHeight: 16, fontFamily: 'Metropolis-Bold' },
  text: { fontSize: 16, lineHeight: 16, fontFamily: 'Metropolis-Regular' },
  descriptive: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Metropolis-Medium',
  },
  description: { fontSize: 16, lineHeight: 21, fontFamily: 'Metropolis-Light' },
  helper: {
    fontSize: 11,
    lineHeight: 11,
    fontFamily: 'Metropolis-Light',
    color: COLORS.grey,
  },
});

export default TextComponent;
