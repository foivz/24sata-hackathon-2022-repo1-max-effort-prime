import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Avatar } from '../../../common/components';
import Icon from '../../../common/components/Icon';

import colors from '../../../constants/colors';
import { ChevronRightIcon } from '../../../common/assets/icons';
import { fontSize } from '../../../constants/typography';
import screen from '../../../navigation/screens';

interface GroupProps {
  name: string;
}

const Group: React.FunctionComponent<GroupProps> = ({ name }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(screen.SPLIT_EXPENSES_SHEET_PRICES)}>
      <Text style={{ color: colors.black, fontWeight: 'bold', fontSize: fontSize.normal }}>{name}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Avatar />
          <Avatar />
          <Avatar />
        </View>
        <Icon icon={ChevronRightIcon} width={30} height={30} stroke={colors.green} />
      </View>
    </TouchableOpacity>
  );
};

export default Group;
