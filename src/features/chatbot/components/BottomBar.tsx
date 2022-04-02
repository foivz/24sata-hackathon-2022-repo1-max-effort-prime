import React from 'react';
import { View } from 'react-native';

import { ActionButton, TextField } from '../../../common/components';

import { PlusIcon } from '../../../common/assets/icons';

interface BottomBarProps {
  onButtonPress: () => void;
}

const BottomBar: React.FC<BottomBarProps> = ({ onButtonPress }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <ActionButton icon={PlusIcon} style={{ borderRadius: 20, marginRight: 10 }} onPress={onButtonPress} />

      <TextField value="boss" style={{ flex: 1 }} />
    </View>
  );
};

export default BottomBar;
