import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Message from './components/Message';
import BottomBar from './components/BottomBar';
import ChatActions from './components/ChatActions';

import { fontSize } from '../../constants/typography';
import colors from '../../constants/colors';
import { Space } from '../../common/components';

interface ChatScreenProps {}

interface MessageType {
  type: 'sent' | 'received';
  message: string;
}

const ChatScreen: React.FC<ChatScreenProps> = () => {
  const insets = useSafeAreaInsets();
  const [actionsExpanded, setActionsExpanded] = useState<boolean>(false);

  const actions = [
    'Koliko iznosi moj budzet?',
    'O aplikaciji',
    'Promjena budzeta',
    'Moje grupe',
    'Prikazi mjesecnu potrosnju po mjesecima',
  ];

  const messages: MessageType[] = [
    {
      type: 'received',
      message: 'Pozdrav! Ja sam tvoj chatbot Krešo! Klikni na ikonu su plusićom te odaberi kako ti mogu pomoći! 😉',
    },
    {
      type: 'sent',
      message: 'Promjena budžeta',
    },
    {
      type: 'received',
      message: 'Tvoj trenutni budžet iznosi 200 HRK. Unesi iznos novog željenog mjesečnog budžeta.',
    },
    {
      type: 'sent',
      message: '350 HRK',
    },
    {
      type: 'received',
      message: 'Promijenjeno! Tvoj novi mjesečni budžet iznosi 350 HRK',
    },
  ];

  return (
    <View style={{ paddingTop: insets.top, flex: 1, justifyContent: 'space-between' }}>
      <View>
        <Text style={{ fontSize: fontSize.large, fontWeight: 'bold', paddingHorizontal: 15, marginBottom: 10 }}>💬 Chatbot</Text>
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.message}
        renderItem={({ item }) => <Message message={item.message} type={item.type} />}
        ItemSeparatorComponent={() => <Space height={15} />}
        contentContainerStyle={{ paddingTop: 20, paddingHorizontal: 15 }}
      />

      <View
        style={{
          backgroundColor: colors.white,
          paddingHorizontal: 15,
          paddingVertical: 15,
          borderTopLeftRadius: 14,
          borderBottomRightRadius: 14,
          paddingBottom: insets.bottom,
        }}>
        {actionsExpanded && <ChatActions />}

        <BottomBar onButtonPress={() => setActionsExpanded(!actionsExpanded)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChatScreen;
