import React, { useRef } from 'react';
import { KeyboardAvoidingView, Text, View, ScrollView, StyleSheet } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import PhoneInput from 'react-native-phone-input';

import LoginIllustration from './assets/login.svg';
import { Button, Space, TextField } from '../../common/components';
import { ChevronRightIcon } from '../../common/assets/icons';
import Icon from '../../common/components/Icon';
import colors from '../../constants/colors';
import { fontSize } from '../../constants/typography';
import { useAppDispatch, useAppSelector } from '../../common/store';
import { LoginBody } from './api/user';
import { signIn } from './store/user';
import PhoneNumberInput from '../../common/components/PhoneInput';

interface LoginScreenProps {}

const LoginScreen: React.FunctionComponent<LoginScreenProps> = () => {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const phoneInputRef = useRef<PhoneInput>(null);
  const { isLoading } = useAppSelector((state) => state.user);

  const { control, handleSubmit } = useForm<LoginBody>({
    defaultValues: {
      phoneNumber: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginBody) => {
    try {
      await dispatch(
        signIn({
          phoneNumber: data.phoneNumber.replaceAll(' ', ''),
          password: data.password,
        }),
      ).unwrap();
      console.log('tu');
    } catch (error: any) {
      console.log('error', JSON.stringify(error, null, 2));
      const err = error + '';
      //    Toast.show({ type: 'error', text1: err });
    }
  };

  return (
    <KeyboardAvoidingView style={styles.flex} behavior="padding">
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom + 20,
        }}>
        <View style={{ alignSelf: 'center', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: fontSize.extraLarge, marginTop: 20 }}>Šparo</Text>
          <View style={{ alignSelf: 'center' }}>
            <Icon icon={LoginIllustration} width={300} height={300} />
          </View>
        </View>
        <View style={{ width: '100%', paddingHorizontal: 23 }}>
          <View>
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field: { onChange, value } }) => (
                <PhoneNumberInput onChange={onChange} initialValue={value || undefined} phoneInputRef={phoneInputRef} />
              )}
            />

            <Space height={10} />
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField placeholder="Lozinka" value={value} onChangeText={onChange} secureTextEntry />
              )}
            />
            <Space height={24} />
            <Button variant="primary" title="Prijava" onPress={handleSubmit(onSubmit)} loading={isLoading} />
            <Space height={29} />
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
              <Text style={{ color: colors.green }}>Kreiranje računa</Text>
              <Icon icon={ChevronRightIcon} width={18} height={18} stroke={colors.green} />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default LoginScreen;
