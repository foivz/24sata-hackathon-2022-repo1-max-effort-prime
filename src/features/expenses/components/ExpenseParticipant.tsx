import React from 'react';
import { View, Text } from 'react-native';

import { Avatar } from '../../../common/components';

import colors from '../../../constants/colors';
import { fontSize } from '../../../constants/typography';

interface ExpenseParticipant {}

const ExpenseParticipant: React.FunctionComponent<ExpenseParticipant> = () => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 12,
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Avatar size={40} style={{ marginRight: 15 }} />
        <Text style={{ fontWeight: '500', fontSize: fontSize.smallToNormal }}>Filip Bel</Text>
      </View>
      <View style={{ backgroundColor: colors.whiteSmoke, padding: 10, borderRadius: 10 }}>
        <Text style={{ color: colors.darkSouls, fontSize: fontSize.small }}>80 HRK</Text>
      </View>
    </View>
  );
};

export default ExpenseParticipant;
