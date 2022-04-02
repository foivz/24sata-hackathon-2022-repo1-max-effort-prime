import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ActionButton, Avatar, Button, Space, TextField } from '../../common/components';

import { PlusIcon, TrashIcon } from '../../common/assets/icons';
import colors from '../../constants/colors';
import { fontSize } from '../../constants/typography';
import screen from '../../navigation/screens';
import { GroupMember } from './components';

interface NewGroupScreenProps {}

const NewGroupScreen: React.FC<NewGroupScreenProps> = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: fontSize.large, marginBottom: 20 }}>Nova grupa</Text>

      <TextField placeholder="Naziv grupe" />
      <Space height={30} />

      <View style={styles.flexRow}>
        <Text style={{ fontWeight: 'bold', fontSize: fontSize.large }}>👪 Članovi</Text>
        <ActionButton icon={PlusIcon} onPress={() => navigation.navigate(screen.NEW_GROUP_SHEET_SELECT_CONTACT)} />
      </View>
      <Space height={30} />

      <GroupMember name="Filip Bel" />

      <Space height={40} />

      <Space height={15} />

      <Text style={styles.title}>📈 Mjesečni budžet</Text>
      <Space height={15} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: colors.whiteSmoke,
          borderRadius: 10,
          paddingVertical: 12,
          paddingLeft: 20,
        }}>
        <TextInput placeholder="200" placeholderTextColor={colors.darkSouls} />
        <Text style={{ position: 'absolute', right: 10, color: colors.darkSouls }}>HRK</Text>
      </View>

      <Button variant="primary" title="Kreiraj grupu" containerStyle={{ marginTop: 40 }} />
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

export default NewGroupScreen;
