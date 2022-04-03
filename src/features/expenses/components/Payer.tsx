import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Avatar } from '../../../common/components';
import { useAppSelector } from '../../../common/store';
import colors from '../../../constants/colors';
import { fontSize } from '../../../constants/typography';
import { totalPriceSelector } from '../store';

interface PayerProps {
  payer: any;
}

const Payer: React.FunctionComponent<PayerProps> = ({ payer }) => {
  const totalAmount = useAppSelector((state) => totalPriceSelector(state.expenses));

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Avatar style={{ marginRight: 10 }} name={`${payer.firstName} ${payer.lastName}`} />
        <Text>
          {payer.firstName} {payer.lastName}
        </Text>
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
        <TextInput value={(totalAmount / 2).toString()} style={{ marginRight: 10 }} keyboardType="numeric" />
        <Text style={{ color: colors.darkSouls, fontSize: fontSize.small }}>HRK</Text>
      </View>
    </View>
  );
};

export default Payer;
