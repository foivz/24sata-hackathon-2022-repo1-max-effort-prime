import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { ChevronRightIcon } from '../../../common/assets/icons';
import Icon from '../../../common/components/Icon';

import colors from '../../../constants/colors';

interface ExpenseEntryProps extends TouchableOpacityProps {}

const ExpenseEntry: React.FunctionComponent<ExpenseEntryProps> = ({ ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 18,
        borderRadius: 20,
      }}
      {...props}>
      <View>
        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>167 HRK</Text>
        <Text style={{ color: colors.gray }}>2. travnja</Text>
      </View>
      <Icon icon={ChevronRightIcon} width={25} height={25} stroke={colors.green} />
    </TouchableOpacity>
  );
};

export default ExpenseEntry;
