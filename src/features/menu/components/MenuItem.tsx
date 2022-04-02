import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { ChevronRightIcon } from '../../../common/assets/icons';

import Icon from '../../../common/components/Icon';

import colors from '../../../constants/colors';
import { fontSize } from '../../../constants/typography';

interface MenuItemProps extends TouchableOpacityProps {
  title: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      {...props}>
      <Text style={{ fontSize: fontSize.small }}>{title}</Text>
      <Icon icon={ChevronRightIcon} stroke={colors.green} width={20} height={20} />
    </TouchableOpacity>
  );
};

export default MenuItem;
