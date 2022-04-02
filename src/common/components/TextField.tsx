import React from 'react';
import { View, TextInput, TextInputProps, StyleSheet } from 'react-native';

import Icon from './Icon';

import colors from '../../constants/colors';

interface TextFieldProps extends TextInputProps {
  icon: React.FC;
  iconProps?: any;
}

const TextField: React.FunctionComponent<TextFieldProps> = ({ icon, iconProps, ...props }) => {
  return (
    <View style={styles.container}>
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
