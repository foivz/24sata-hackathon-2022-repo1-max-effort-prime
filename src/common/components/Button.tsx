import React, { useMemo } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet, ViewStyle, TextStyle } from 'react-native';

import Icon from './Icon';

import colors from '../../constants/colors';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant: 'primary' | 'secondary';
  containerStyle?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  icon?: React.FC;
}

const Button: React.FunctionComponent<ButtonProps> = ({ title, variant, containerStyle, icon, textStyle, ...props }) => {
  const textColor = useMemo(() => {
    switch (variant) {
      case 'primary':
        return colors.white;
      case 'secondary':
        return colors.green;
    }
  }, [variant]);

  return (
    <TouchableOpacity style={[styles.container, styles[variant], containerStyle]} {...props}>
      {icon && <Icon icon={icon} style={styles.icon} />}
      <Text style={[{ color: textColor }, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 14,
  },
  primary: {
    backgroundColor: colors.green,
  },
  secondary: {
    backgroundColor: colors.weakMint,
  },
  icon: {
    marginRight: 12,
  },
});

export default Button;
