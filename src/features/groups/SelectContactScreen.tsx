import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';
import { useNavigation } from '@react-navigation/native';

import { ActionButton, Divider, Space, TextField } from '../../common/components';
import { Contact } from './components';

import { ArrowLeftIcon, SearchIcon } from '../../common/assets/icons';
import { fontSize } from '../../constants/typography';
import { Contact as ContactType } from './types';
import colors from '../../constants/colors';

interface SelectContactScreenProps {}

const SelectContactScreen: React.FC<SelectContactScreenProps> = () => {
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const getContacts = async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails],
        });

        const contacts = data.map((c) => {
          let contact: ContactType = {
            id: c.id,
            firstName: c.firstName,
            lastName: c.lastName,
          };

          // Get contact's first phone number & email if they exist
          if (c.phoneNumbers && c.phoneNumbers.length > 0) contact.phoneNumber = c.phoneNumbers[0].number;
          if (c.emails && c.emails.length > 0) contact.email = c.emails[0].email;

          return contact;
        });

        setContacts(contacts);
      }
    };

    getContacts();
  }, []);

  return (
    <View>
      <ActionButton icon={ArrowLeftIcon} backgroundColor={colors.whiteSmoke} color={colors.darkSouls} onPress={() => navigation.goBack()} />
      <Space height={20} />
      <Text style={{ fontWeight: 'bold', fontSize: fontSize.large }}>Dodaj člana</Text>

      <Space height={20} />
      <TextField placeholder="Pretraga" icon={SearchIcon} value={searchQuery} onChangeText={(value) => setSearchQuery(value)} />
      <Space height={20} />
      <FlatList
        data={contacts.filter(
          (c) =>
            c.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.lastName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            [c.firstName, c.lastName].join(' ').toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.phoneNumber?.includes(searchQuery),
        )}
        renderItem={({ item }) => <Contact contact={item} />}
        ItemSeparatorComponent={() => <Divider width={2} style={{ marginVertical: 10 }} color={colors.whiteSmoke} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: fontSize.medium,
    fontWeight: 'bold',
  },
});

export default SelectContactScreen;
