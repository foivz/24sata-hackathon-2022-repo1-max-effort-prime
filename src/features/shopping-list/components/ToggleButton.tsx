import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import colors from '../../../constants/colors';
import { fontSize } from '../../../constants/typography';

interface ToggleButtonProps extends TouchableOpacityProps {
  text: string;
  active: boolean;
}

const ToggleButton: React.FunctionComponent<ToggleButtonProps> = ({ text, active, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: active ? colors.green : colors.white,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
      }}
      {...props}>
      <Text style={{ fontSize: fontSize.small, color: active ? colors.white : colors.black }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ToggleButton;
