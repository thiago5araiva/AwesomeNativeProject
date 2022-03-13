import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import ImageType from '../types';
import { handleWithPropImage } from '../helpers';

const ChevronRightIcon = ({ width, color, customStyle }: ImageType) => {
  const originalWidth = width ? width : 24;
  const originalHeight = 24;

  const { fill, size, height } = handleWithPropImage(
    color,
    originalWidth,
    originalHeight,
  );

  return (
    <View style={customStyle}>
      <Svg width={size} height={height} viewBox="0 0 24 24" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.22552 12.5431C6.92483 12.2429 6.92483 11.7579 7.22552 11.4569L14.362 4.32572C14.7961 3.89143 15.5023 3.89143 15.9372 4.32572C16.3713 4.76002 16.3713 5.46488 15.9372 5.89917L9.83231 12.0004L15.9372 18.1C16.3713 18.5351 16.3713 19.24 15.9372 19.6743C15.5023 20.1086 14.7961 20.1086 14.362 19.6743L7.22552 12.5431Z"
          fill={fill}
        />
      </Svg>
    </View>
  );
};

export default ChevronRightIcon;
