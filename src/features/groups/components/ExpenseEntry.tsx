import React from 'react';
import { View, Text } from 'react-native';

import Icon from '../../../common/components/Icon';

import { ChevronRightIcon } from '../../../common/assets/icons';
import colors from '../../../constants/colors';
import { fontSize } from '../../../constants/typography';

interface ExpenseEntryProps {}

const ExpenseEntry: React.FC<ExpenseEntryProps> = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <View>
        <Text style={{ fontWeight: '500', fontSize: fontSize.normal, marginBottom: 5 }}>167 HRK</Text>
        <Text style={{ color: colors.gray }}>2. travnja</Text>
      </View>
      <Icon icon={ChevronRightIcon} width={20} height={20} stroke={colors.green} />
    </View>
  );
};

export default ExpenseEntry;
