import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CheckCircleIcon } from '../../../common/assets/icons';

import { Avatar } from '../../../common/components';
import Icon from '../../../common/components/Icon';

import colors from '../../../constants/colors';
import { fontSize } from '../../../constants/typography';
import { Contact as ContactType } from '../types';

interface ContactProps {
  selected: boolean;
  contact: ContactType;
  onPress: () => void;
}

const Contact: React.FunctionComponent<ContactProps> = ({ selected, contact, onPress }) => {
  return (
    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Avatar name={`${contact.firstName} ${contact.lastName}`} style={{ marginRight: 20 }} />
        <View>
          <Text style={{ fontWeight: '500', fontSize: fontSize.small, marginBottom: 5 }}>
            {contact.firstName} {contact.lastName}
          </Text>
          <Text style={{ color: colors.gray }}>{contact.phoneNumber}</Text>
        </View>
      </View>
      {selected && <Icon icon={CheckCircleIcon} width={25} height={25} fill={colors.green} />}
    </TouchableOpacity>
  );
};

export default Contact;
