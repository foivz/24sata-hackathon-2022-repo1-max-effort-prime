import React from 'react';
import { View, Text, ViewStyle } from 'react-native';

import colors from '../../constants/colors';
import { fontSize } from '../../constants/typography';
import { getInitials } from '../../utils/getInitials';

interface AvatarProps {
  size?: number;
  style?: ViewStyle;
}

const Avatar: React.FunctionComponent<AvatarProps> = ({ size = 44, style }) => {
  return (
    <View
      style={[
        {
          padding: 10,
          borderRadius: 25,
          backgroundColor: colors.whiteSmoke,
          width: size,
          height: size,
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}>
      <Text style={{ color: colors.black, fontSize: fontSize.normal }}>{getInitials('Emrah Rizvić')}</Text>
    </View>
  );
};

export default Avatar;
