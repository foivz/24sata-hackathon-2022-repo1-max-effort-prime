import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CheckCircleIcon } from '../../../common/assets/icons';

import { Avatar } from '../../../common/components';
import Icon from '../../../common/components/Icon';

import colors from '../../../constants/colors';
import { fontSize } from '../../../constants/typography';
import { Contact as ContactType } from '../types';

interface ContactProps {
  contact: ContactType;
}

const Contact: React.FunctionComponent<ContactProps> = ({ contact }) => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
      onPress={() => setSelected(!selected)}>
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
