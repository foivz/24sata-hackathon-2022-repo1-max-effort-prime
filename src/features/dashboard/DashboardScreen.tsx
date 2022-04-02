import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ActionButton, Progress, Space } from '../../common/components';
import { Card } from './components';

import colors from '../../constants/colors';
import { fontSize } from '../../constants/typography';
import { PencilIcon } from './assets';
import useModal from '../../hooks/useModal';
import { PlusIcon } from '../../common/assets/icons';

const DashboardScreen = () => {
  const { openModal } = useModal();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bok, Filip!</Text>
      <Card>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontWeight: '500', fontSize: fontSize.mediumLarge }}>104 HRK</Text>
          <ActionButton icon={PlusIcon} iconSize={28} />
        </View>
        <Text style={{ color: colors.gray }}>Potrošnja ovaj mjesec</Text>
      </Card>

      <Card>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontWeight: '500', fontSize: fontSize.mediumLarge }}>76 HRK</Text>
          <ActionButton icon={PencilIcon} onPress={() => openModal('ChangeBudgetModal')} />
        </View>
        <Text style={{ color: colors.gray }}>Preostalo od mjesečnog budžeta</Text>
        <Space height={10} />

        <Progress />
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
  },
  title: {
    fontSize: fontSize.extraLarge,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  card: {
    backgroundColor: colors.white,
    padding: 27,
    borderRadius: 20,
  },
});

export default DashboardScreen;
