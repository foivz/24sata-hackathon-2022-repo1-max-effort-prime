import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, ViewStyle, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

import Icon from './Icon';

interface ActionButtonProps extends TouchableOpacityProps {
  icon: React.FunctionComponent;
  iconSize?: number;
  color?: string;
  style?: ViewStyle;
}

const ActionButton: React.FunctionComponent<ActionButtonProps> = ({ icon, iconSize = 23, color = colors.green, style, ...props }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} {...props}>
      <Icon icon={icon} width={iconSize} height={iconSize} stroke={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.weakMint,
    padding: 10,
    borderRadius: 10,
  },
});

export default ActionButton;
