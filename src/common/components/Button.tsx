import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps, StyleSheet, ViewStyle } from 'react-native';
import colors from '../../constants/colors';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant: 'primary' | 'secondary';
  containerStyle?: ViewStyle | ViewStyle[];
}

const Button: React.FunctionComponent<ButtonProps> = ({ title, variant, containerStyle, ...props }) => {
  const textColor = useMemo(() => {
    switch (variant) {
      case 'primary':
        return colors.white;
    }
  }, [variant]);

  return (
    <TouchableOpacity style={[styles.container, styles[variant], containerStyle]} {...props}>
      <Text style={{ color: textColor }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 14,
  },
  primary: {
    backgroundColor: colors.green,
  },
});

export default Button;
