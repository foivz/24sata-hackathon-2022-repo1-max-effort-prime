import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Space } from '../../../common/components';

import ChatAction from './ChatAction';

interface ChatActionsProps {}

const ChatActions: React.FC<ChatActionsProps> = () => {
  return (
    <View style={{ marginBottom: 15 }}>
      <View style={styles.flexRow}>
        <ChatAction title="Koliko iznosi moj budžet?" style={{ flex: 4 }} />
        <Space width={10} />
        <ChatAction title="O aplikaciji" style={{ flex: 2 }} />
      </View>
      <Space height={8} />
      <View style={styles.flexRow}>
        <ChatAction title="Promjena budžeta" style={{ flex: 3 }} />
        <Space width={12} />
        <ChatAction title="Moje grupe" style={{ flex: 2 }} />
      </View>
      <Space height={8} />
      <View style={styles.flexRow}>
        <ChatAction title="Prikaži prosječnu potrošnju po mjesecima" style={{ flex: 1 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default ChatActions;
