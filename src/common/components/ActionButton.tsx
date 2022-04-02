import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, ViewStyle, StyleSheet, ActivityIndicator } from 'react-native';
import colors from '../../constants/colors';

import Icon from './Icon';

interface ActionButtonProps extends TouchableOpacityProps {
  icon: React.FunctionComponent;
  iconSize?: number;
  color?: string;
  style?: ViewStyle;
  loading?: boolean;
  backgroundColor?: string;
}

const ActionButton: React.FunctionComponent<ActionButtonProps> = ({
  icon,
  iconSize = 23,
  color = colors.green,
  backgroundColor = colors.weakMint,
  style,
  loading,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles.container, style, { backgroundColor }]} {...props}>
      {loading ? <ActivityIndicator color="white" /> : <Icon icon={icon} width={iconSize} height={iconSize} stroke={color} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    height: 40,
    width: 40,
  },
});

export default ActionButton;
