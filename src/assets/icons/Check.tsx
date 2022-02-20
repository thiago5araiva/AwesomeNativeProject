import React from 'react';
import Svg, { Path } from 'react-native-svg';
import IconType from './types';

const CheckIcon = ({ fill, width, height }: IconType): JSX.Element => {
  const colorValue = fill ? fill : '#2AA952';
  const widthValue = width ? width : '24';
  const heightValue = height ? height : '24';

  return (
    <Svg
      width={widthValue}
      height={heightValue}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M9.03809 16.6234L4.53383 11.648L3 13.3303L9.03809 20L22 5.68233L20.477 4L9.03809 16.6234Z"
        fill={colorValue}
      />
    </Svg>
  );
};

export default CheckIcon;
