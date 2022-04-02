import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { ActionButton, Divider } from '../../../common/components';
import colors from '../../../constants/colors';
import { fontSize } from '../../../constants/typography';
import { PencilIcon } from '../../dashboard/assets';
import ListItem from './ListItem';

interface SheetContentProps {}

const SheetContent: React.FunctionComponent<SheetContentProps> = () => {
  return (
    <View style={{ paddingHorizontal: 24, marginTop: 30, flex: 1 }}>
      <View style={{ marginBottom: 30 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: fontSize.large, fontWeight: 'bold' }}>167 HRK</Text>
          <ActionButton icon={PencilIcon} />
        </View>
        <Text style={{ fontSize: fontSize.small, color: colors.gray }}>2. travnja u 14:57</Text>
      </View>
      <FlatList
        data={[
          {
            id: '1',
            name: 'Nekaj',
          },
          {
            id: '2',
            name: 'Nekaj',
          },
          {
            id: '3',
            name: 'Nekaj',
          },
        ]}
        renderItem={({ item }) => <ListItem containerStyle={{ paddingHorizontal: 0, marginBottom: 0, paddingVertical: 8 }} />}
        ItemSeparatorComponent={() => <Divider />}
      />
    </View>
  );
};

export default SheetContent;
