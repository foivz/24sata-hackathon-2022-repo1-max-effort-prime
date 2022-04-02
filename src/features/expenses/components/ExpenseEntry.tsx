import dayjs from 'dayjs';
import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { ChevronRightIcon } from '../../../common/assets/icons';
import Icon from '../../../common/components/Icon';

import colors from '../../../constants/colors';
import { fontSize } from '../../../constants/typography';
import { Expense } from '../types';

import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/hr';

dayjs.extend(relativeTime);

interface ExpenseEntryProps extends TouchableOpacityProps {
  expense: Expense;
}

const ExpenseEntry: React.FunctionComponent<ExpenseEntryProps> = ({ expense, ...props }) => {
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
        marginBottom: 14,
      }}
      {...props}>
      <View>
        <Text style={{ fontWeight: 'bold', marginBottom: 5, fontSize: fontSize.mediumLarge }}>{expense.amount} HRK</Text>
        <Text style={{ color: colors.gray, fontSize: fontSize.small }}>{dayjs(expense.createdAt).locale('hr').format('D. MMMM')}</Text>
      </View>
      <Icon icon={ChevronRightIcon} width={25} height={25} stroke={colors.green} />
    </TouchableOpacity>
  );
};

export default ExpenseEntry;
