import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../constants/colors';

import { fontSize } from '../../constants/typography';

interface ChatScreenProps {}

const ChatScreen: React.FC<ChatScreenProps> = () => {
  return (
    <SafeAreaView style={{ paddingHorizontal: 15 }}>
      <Text style={{ fontSize: fontSize.large, fontWeight: 'bold' }}>💬 Chatbot</Text>

      <View style={{ backgroundColor: colors.white }}></View>
    </SafeAreaView>
  );
};

export default ChatScreen;
