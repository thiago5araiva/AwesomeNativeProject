import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import ImageType from '../types';
import { handleWithPropImage } from '../helpers';

const ArrowRightIcon = ({
  width,
  color,
  customStyle,
}: ImageType): JSX.Element => {
  const originalWidth = width ? width : 16;
  const originalHeight = 8;

  const { fill, size, height } = handleWithPropImage(
    color,
    originalWidth,
    originalHeight,
  );

  return (
    <View style={customStyle}>
      <Svg width={size} height={height} viewBox="0 0 16 8" fill="none">
        <Path
          d="M12.01 3.00002H1C0.45 3.00002 0 3.45002 0 4.00002C0 4.55002 0.45 5.00002 1 5.00002H12.01V6.79002C12.01 7.24002 12.55 7.46002 12.86 7.14002L15.64 4.35002C15.83 4.15002 15.83 3.84002 15.64 3.64002L12.86 0.850017C12.55 0.530017 12.01 0.760017 12.01 1.20002V3.00002Z"
          fill={fill}
        />
      </Svg>
    </View>
  );
};

export default ArrowRightIcon;
