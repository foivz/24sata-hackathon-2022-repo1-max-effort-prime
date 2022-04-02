import React from 'react';
import { View } from 'react-native';

import GroupDetailsSheetNavigator from './GroupDetailsSheetNavigator';

interface SheetContentProps {}

const SheetContent: React.FunctionComponent<SheetContentProps> = () => {
  return (
    <View style={{ paddingHorizontal: 20, marginTop: 20, flex: 1 }}>
      <GroupDetailsSheetNavigator />
    </View>
  );
};

export default SheetContent;
