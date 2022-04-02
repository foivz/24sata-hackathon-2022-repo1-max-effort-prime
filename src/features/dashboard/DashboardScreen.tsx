import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ActionButton, Space } from '../../common/components';
import { Progress } from './components';

import colors from '../../constants/colors';
import { fontSize } from '../../constants/typography';
import { PencilIcon } from './assets';

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bok, Filip!</Text>
      <View style={styles.card}>
        <Text>104 HRK</Text>
        <Text>Potrošnja ovaj mjesec</Text>
      </View>

      <View style={styles.card}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontWeight: '500', fontSize: fontSize.mediumLarge }}>76 HRK</Text>
          <ActionButton icon={PencilIcon} />
        </View>
        <Text style={{ color: colors.gray }}>Preostalo od mjesečnog budžeta</Text>
        <Space height={10} />

        <Progress />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: fontSize.extraLarge,
    fontWeight: 'bold',
    marginBottom: 20,
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
