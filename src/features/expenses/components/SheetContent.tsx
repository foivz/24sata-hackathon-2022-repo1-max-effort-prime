import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useQuery } from 'react-query';
import { ActionButton, Divider } from '../../../common/components';
import colors from '../../../constants/colors';
import { fontSize } from '../../../constants/typography';
import { PencilIcon } from '../../dashboard/assets';
import { getExpenseItems } from '../api';
import ListItem from './ListItem';

import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/hr';
import dayjs from 'dayjs';

dayjs.extend(relativeTime);

interface SheetContentProps {
  selected: any;
}

const SheetContent: React.FunctionComponent<SheetContentProps> = ({ selected }) => {
  const { data } = useQuery(['expense', selected._id], () => getExpenseItems(selected._id), {
    enabled: !!selected,
  });

  console.log(selected);

  return (
    <View style={{ paddingHorizontal: 24, marginTop: 30, flex: 1 }}>
      <View style={{ marginBottom: 30 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: fontSize.large, fontWeight: 'bold' }}>{selected.amount} HRK</Text>
          <ActionButton icon={PencilIcon} />
        </View>
        <Text style={{ fontSize: fontSize.small, color: colors.gray }}>
          {dayjs(selected.createdAt).locale('hr').format('D. MMMM [u] HH:mm')}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <ListItem item={item} containerStyle={{ paddingHorizontal: 0, marginBottom: 0, paddingVertical: 8 }} />}
        ItemSeparatorComponent={() => <Divider />}
      />
    </View>
  );
};

export default SheetContent;
