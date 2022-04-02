import React from 'react';
import { View } from 'react-native';
import colors from '../../../constants/colors';

interface CardProps {}

const Card: React.FunctionComponent<CardProps> = ({ children }) => {
  return (
    <View style={{ backgroundColor: colors.white, paddingHorizontal: 20, paddingVertical: 24, borderRadius: 20, marginBottom: 20 }}>
      {children}
    </View>
  );
};

export default Card;
