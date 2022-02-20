import React from 'react';
import Svg, { Path } from 'react-native-svg';
import IconType from './types';

const ErrorIcon = ({ fill, width, height }: IconType): JSX.Element => {
  const colorValue = fill ? fill : '#F01F0E';
  const widthValue = width ? width : '12';
  const heightValue = height ? height : '12';

  return (
    <Svg
      width={widthValue}
      height={heightValue}
      viewBox="0 0 14 14"
      fill="none">
      <Path
        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
        fill={colorValue}
      />
    </Svg>
  );
};

export default ErrorIcon;
