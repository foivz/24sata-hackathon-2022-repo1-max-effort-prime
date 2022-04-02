import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Space from './Space';

import colors from '../../constants/colors';

interface ProgressProps {
  endValue: number;
}

const Progress: React.FC<ProgressProps> = ({ endValue }) => {
  return (
    <View>
      <View style={{ height: 10, backgroundColor: colors.lynxWhite, borderRadius: 20, width: '100%' }}>
        <View style={{ height: 10, backgroundColor: colors.green, borderRadius: 20, width: '60%' }} />
      </View>
      <Space height={10} />
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={styles.text}>0 HRK</Text>
        <Text style={styles.text}>{endValue.toString()} HRK</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.gray,
  },
});

export default Progress;
