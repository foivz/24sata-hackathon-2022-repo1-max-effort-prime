import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useQuery } from 'react-query';
import { ChevronRightIcon } from '../../../common/assets/icons';

import { Avatar, Divider } from '../../../common/components';
import Icon from '../../../common/components/Icon';
import useUser from '../../../common/hooks/useUser';
import colors from '../../../constants/colors';

import { fontSize } from '../../../constants/typography';
import { getGroups } from '../../groups/api/groups';
import Group from '../components/Group';

interface SplitExpensesScreenProps {}

const SplitExpensesScreen: React.FunctionComponent<SplitExpensesScreenProps> = () => {
  const user = useUser();
  const { data } = useQuery('groups', () => getGroups(user?._id), {
    enabled: !!user,
  });

  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: fontSize.large, marginBottom: 30 }}>Podijeli trošak</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <Group group={item} />}
        ItemSeparatorComponent={() => <Divider />}
      />
    </View>
  );
};

export default SplitExpensesScreen;
