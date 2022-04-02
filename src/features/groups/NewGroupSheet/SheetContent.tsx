import React from 'react';
import { View } from 'react-native';

import NewGroupSheetNavigator from './NewGroupSheetNavigator';

interface SheetContentProps {}

const SheetContent: React.FunctionComponent<SheetContentProps> = () => {
  return (
    <View style={{ paddingHorizontal: 20, marginTop: 20, flex: 1 }}>
      <NewGroupSheetNavigator />
    </View>
  );
};

export default SheetContent;
