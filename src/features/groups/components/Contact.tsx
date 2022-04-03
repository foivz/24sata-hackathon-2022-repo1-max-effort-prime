import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.leftSection}>
        <Avatar name={`${contact.firstName} ${contact.lastName}`} style={styles.avatar} />
        <View>
          <Text style={styles.name}>
            {contact.firstName} {contact.lastName}
          </Text>
          <Text style={{ color: colors.gray }}>{contact.phoneNumber}</Text>
        </View>
      </View>
      {selected && <Icon icon={CheckCircleIcon} width={25} height={25} fill={colors.green} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    marginRight: 20,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontWeight: '500',
    fontSize: fontSize.small,
    marginBottom: 5,
  },
});

export default Contact;
