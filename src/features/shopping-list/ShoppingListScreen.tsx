import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { PlusIcon } from '../../common/assets/icons';
import ActionButton from '../../common/components/ActionButton';
import colors from '../../constants/colors';
import { fontSize } from '../../constants/typography';
import ToggleButton from './components/ToggleButton';

const TabTwoScreen = () => {
  const [active, setActive] = useState<'redovna' | 'ponavljajuća'>('redovna');

  return (
    <SafeAreaView edges={['top', 'right', 'left']} style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: fontSize.large }}>🛒 </Text>
        <ActionButton icon={PlusIcon} color={colors.green} />
      </View>
      <Text>Lista za kupnju</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <ToggleButton text="Redovna" />
        <ToggleButton text="Ponavljajuća" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default TabTwoScreen;
