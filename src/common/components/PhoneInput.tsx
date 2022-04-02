import React from 'react';
import { View, Text, ViewStyle, StyleSheet, TextInput } from 'react-native';
import PhoneInput from 'react-native-phone-input';
import colors from '../../constants/colors';

interface PhoneNumberInputProps {
  containerStyle?: ViewStyle;
  onChange: (phoneNumber: string) => void;
  initialValue?: string;
  hideLabel?: boolean;
  phoneInputRef?: React.RefObject<PhoneInput<typeof TextInput>>;
}

const PhoneNumberInput: React.FunctionComponent<PhoneNumberInputProps> = ({
  containerStyle,
  onChange,
  initialValue,
  hideLabel,
  phoneInputRef,
}) => {
  return (
    <View style={containerStyle}>
      <PhoneInput
        ref={phoneInputRef}
        initialCountry={'hr'}
        autoFormat={true}
        textStyle={styles.text}
        style={styles.input}
        initialValue={initialValue}
        cancelText="Odustani"
        confirmText="Potvrdi"
        onChangePhoneNumber={(displayValue) => onChange(displayValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {},
  text: {},
  input: {
    paddingHorizontal: 20,
    backgroundColor: colors.whiteSmoke,
    borderRadius: 10,
    paddingVertical: 12,
  },
});

export default PhoneNumberInput;
