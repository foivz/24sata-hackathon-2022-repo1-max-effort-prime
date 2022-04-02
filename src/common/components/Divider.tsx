import React from 'react';
import { View } from 'react-native';

import colors from '../../constants/colors';

interface DividerProps {}

const Divider: React.FunctionComponent<DividerProps> = () => {
  return <View style={{ height: 1, backgroundColor: colors.tabBarBackground, marginVertical: 16 }} />;
};

export default Divider;
