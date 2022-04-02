import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Avatar } from '../../../common/components';
import colors from '../../../constants/colors';

interface PayerProps {}

const Payer: React.FunctionComponent<PayerProps> = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Avatar style={{ marginRight: 10 }} />
        <Text>Filip Bel</Text>
      </View>
      <View
        style={{
          backgroundColor: colors.whiteSmoke,
          paddingHorizontal: 20,
          paddingVertical: 15,
          borderRadius: 12,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TextInput value="80" style={{ marginRight: 10 }} keyboardType="numeric" />
        <Text style={{ color: colors.darkSouls }}>HRK</Text>
      </View>
    </View>
  );
};

export default Payer;
