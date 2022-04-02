import React from 'react';
import { View, ViewStyle } from 'react-native';

import colors from '../../constants/colors';

export interface DividerProps {
  style?: ViewStyle;
  color?: string;
  width?: number;
}

const Divider: React.FunctionComponent<DividerProps> = ({ style, color = colors.tabBarBackground, width = 1 }) => {
  return <View style={[{ borderColor: color, borderBottomWidth: width, marginVertical: 16 }, style]} />;
};

export default Divider;
