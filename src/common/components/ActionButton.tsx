import React from 'react';
import { View } from 'react-native';
import colors from '../../constants/colors';

import Icon from './Icon';

interface ActionButtonProps {
  icon: React.FunctionComponent;
  color: string;
}

const ActionButton: React.FunctionComponent<ActionButtonProps> = ({ icon, color }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: colors.weakMint, padding: 10, borderRadius: 10 }}>
      <Icon icon={icon} width={20} height={20} stroke={color} />
    </View>
  );
};

export default ActionButton;
