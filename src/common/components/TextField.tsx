import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import colors from '../../constants/colors';

interface TextFieldProps extends TextInputProps {}

const TextField: React.FunctionComponent<TextFieldProps> = ({ ...props }) => {
  return (
    <TextInput {...props} style={{ paddingHorizontal: 20, backgroundColor: colors.textField, borderRadius: 10, paddingVertical: 10 }} />
  );
};

export default TextField;
