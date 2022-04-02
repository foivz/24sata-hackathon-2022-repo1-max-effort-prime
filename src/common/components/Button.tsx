import React, { useMemo } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet, ViewStyle, TextStyle, ActivityIndicator } from 'react-native';

import Icon from './Icon';

import colors from '../../constants/colors';
import { fontSize } from '../../constants/typography';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant: 'primary' | 'secondary';
  containerStyle?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  icon?: React.FC;
  loading?: boolean;
}

const Button: React.FunctionComponent<ButtonProps> = ({ title, variant, containerStyle, icon, textStyle, loading, ...props }) => {
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
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <>
          {icon && <Icon icon={icon} style={styles.icon} />}
          <Text style={[{ color: textColor, fontSize: fontSize.normal }, textStyle]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 46,
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
