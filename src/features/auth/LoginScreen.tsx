import React from 'react';
import { KeyboardAvoidingView, Text, View, ScrollView } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Space, TextField } from '../../common/components';

import LoginIllustration from './assets/login.svg';
import { ChevronRightIcon } from '../../common/assets/icons';
import Icon from '../../common/components/Icon';
import colors from '../../constants/colors';
import { fontSize } from '../../constants/typography';

interface LoginScreenProps {}

const LoginScreen: React.FunctionComponent<LoginScreenProps> = () => {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom + 20,
        }}>
        <View style={{ alignSelf: 'center', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: fontSize.extraLarge }}>Naziv Aplikacije</Text>
          <View style={{ alignSelf: 'center' }}>
            <Icon icon={LoginIllustration} width={300} height={300} />
          </View>
        </View>
        <View style={{ width: '100%', paddingHorizontal: 23 }}>
          <View>
            <TextField placeholder="Broj mobitela" />
            <Space height={10} />
            <TextField placeholder="Lozinka" />
            <Space height={24} />
            <Button variant="primary" title="Prijava" />
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

export default LoginScreen;
