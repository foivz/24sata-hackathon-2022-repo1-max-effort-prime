import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import { ActionButton, Avatar, Button, Progress, Space, TextField } from '../../common/components';

import { PlusIcon, TrashIcon } from '../../common/assets/icons';
import colors from '../../constants/colors';
import { fontSize } from '../../constants/typography';
import { PencilIcon } from '../dashboard/assets';

interface NewGroupScreenProps {}

const NewGroupScreen: React.FC<NewGroupScreenProps> = () => {
  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: fontSize.large, marginBottom: 20 }}>Nova grupa</Text>

      <TextField placeholder="Naziv grupe" />
      <Space height={30} />

      <View style={styles.flexRow}>
        <Text style={{ fontWeight: 'bold', fontSize: fontSize.medium }}>👪 Članovi</Text>
        <ActionButton icon={PlusIcon} />
      </View>
      <Space height={20} />

      <View style={styles.flexRow}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Avatar style={{ marginRight: 20 }} />
          <Text style={styles.title}>Filip Bel</Text>
        </View>
        <ActionButton icon={TrashIcon} color={colors.paradisePink} backgroundColor={colors.sentimentalPink} />
      </View>

      <Space height={40} />

      {/* <Text style={styles.title}>💰 Zajednički troškovi</Text>
       <Space height={15} />
      <ExpenseEntry /> */}
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

      {/* <View style={styles.flexRow}>
        <Text style={styles.title}>📈 Mjesečni budžet</Text>
        <ActionButton icon={PencilIcon} />
      </View>
      <Space height={15} />
      <Text style={{ fontWeight: '500', fontSize: fontSize.medium }}>76 HRK</Text>
      <Text style={{ marginVertical: 10, color: colors.gray }}>Preostalo od mjesečnog budžeta</Text>
      <Progress /> */}
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
