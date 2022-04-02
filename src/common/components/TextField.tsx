import React from 'react';
import { View, TextInput, TextInputProps, StyleSheet, ViewStyle } from 'react-native';

import Icon from './Icon';

import colors from '../../constants/colors';

interface TextFieldProps extends TextInputProps {
  icon?: React.FC;
  iconProps?: any;
  style?: ViewStyle;
}

const TextField: React.FunctionComponent<TextFieldProps> = ({ icon, iconProps, style, ...props }) => {
  return (
    <View style={[styles.container, style]}>
      {icon && <Icon icon={icon} style={styles.icon} stroke={colors.darkSouls} {...iconProps} />}
      <TextInput {...props} style={{ paddingHorizontal: 20, flex: 1 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.textField,
    borderRadius: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  icon: {
    marginLeft: 16,
  },
});

export default TextField;
