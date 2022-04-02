import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import colors from '../../../constants/colors';

interface ToggleButtonProps extends TouchableOpacityProps {
  text: string;
  active: boolean;
}

const ToggleButton: React.FunctionComponent<ToggleButtonProps> = ({ text, active }) => {
  return (
    <TouchableOpacity
      style={{ padding: 20, backgroundColor: colors.white, borderRadius: 14, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: active ? colors.white : colors.black }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ToggleButton;
