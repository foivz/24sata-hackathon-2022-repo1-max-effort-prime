import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, FlatList, ScrollView, View } from 'react-native';
import * as Contacts from 'expo-contacts';
import { useNavigation } from '@react-navigation/native';

import { ActionButton, Button, Divider, Space, TextField } from '../../common/components';
import { Contact } from './components';

import { ArrowLeftIcon, SearchIcon } from '../../common/assets/icons';
import { fontSize } from '../../constants/typography';
import { Contact as ContactType } from './types';
import colors from '../../constants/colors';
import { getAllUsers } from './api/groups';

interface SelectContactScreenProps {}

const SelectContactScreen: React.FC<SelectContactScreenProps> = () => {
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedContacts, setSelectedContacts] = useState<ContactType[]>([]);

  const handleSelectContact = (contact) => {
    if (selectedContacts.find((c) => c.phoneNumber === contact.phoneNumber)) {
      setSelectedContacts(selectedContacts.filter((c) => c.phoneNumber !== contact.phoneNumber));
    } else {
      setSelectedContacts([...selectedContacts, contact]);
    }
  };

  const handleAddContacts = () => {
    console.log('selected contacts', selectedContacts);
  };

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

        const allUsers = await getAllUsers();

        const filteredContacts = allUsers.filter(
          (c) => contacts.find((u) => u.phoneNumber?.replaceAll(' ', '') === c.phoneNumber) !== undefined,
        );

        console.log('filterd', filteredContacts);

        setContacts(filteredContacts);
      }
    };

    getContacts();
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 60, justifyContent: 'space-between', flex: 1 }}>
      <View>
        <ActionButton
          icon={ArrowLeftIcon}
          backgroundColor={colors.whiteSmoke}
          color={colors.darkSouls}
          onPress={() => navigation.goBack()}
        />
        <Space height={10} />
        <Text style={{ fontWeight: 'bold', fontSize: fontSize.large }}>Dodaj člana</Text>

        <Space height={20} />
        <TextField placeholder="Pretraga" icon={SearchIcon} value={searchQuery} onChangeText={(value) => setSearchQuery(value)} />
        <Space height={20} />
        <FlatList
          scrollEnabled={false}
          data={contacts.filter(
            (c) =>
              c.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
              c.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
              c.lastName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
              [c.firstName, c.lastName].join(' ').toLowerCase().includes(searchQuery.toLowerCase()) ||
              c.phoneNumber?.includes(searchQuery),
          )}
          renderItem={({ item }) => (
            <Contact
              contact={item}
              onPress={() => handleSelectContact(item)}
              selected={selectedContacts.find((c) => c.phoneNumber === item.phoneNumber) !== undefined}
            />
          )}
          ItemSeparatorComponent={() => <Divider width={2} style={{ marginVertical: 10 }} color={colors.whiteSmoke} />}
          keyExtractor={(item) => item._id}
        />
      </View>
      <Button title="Dodaj" variant={'primary'} onPress={handleAddContacts} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default SelectContactScreen;
