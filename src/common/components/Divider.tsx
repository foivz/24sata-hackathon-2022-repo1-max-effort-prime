import React from 'react';
import { View, ViewStyle } from 'react-native';

import colors from '../../constants/colors';

export interface DividerProps {
  style?: ViewStyle;
  color?: string;
  width?: number;
}

const Divider: React.FunctionComponent<DividerProps> = ({ style, color = colors.black, width = 2 }) => {
  return <View style={[{ borderColor: color, borderBottomWidth: width }, style]} />;
};

export default Divider;
