import React from 'react';
import { useTheme } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';
import IconType from './types';

const ChevronRightIcon = ({ fill, width, height }: IconType) => {
  const { colors } = useTheme();
  const colorValue = fill ? fill : colors['black'];
  const widthValue = width ? width : '24';
  const heightValue = height ? height : '24';
  return (
    <Svg
      width={widthValue}
      height={heightValue}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.22552 12.5431C6.92483 12.2429 6.92483 11.7579 7.22552 11.4569L14.362 4.32572C14.7961 3.89143 15.5023 3.89143 15.9372 4.32572C16.3713 4.76002 16.3713 5.46488 15.9372 5.89917L9.83231 12.0004L15.9372 18.1C16.3713 18.5351 16.3713 19.24 15.9372 19.6743C15.5023 20.1086 14.7961 20.1086 14.362 19.6743L7.22552 12.5431Z"
        fill={colorValue}
      />
    </Svg>
  );
};

export default ChevronRightIcon;
