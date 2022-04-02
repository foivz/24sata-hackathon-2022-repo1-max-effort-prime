import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PlusIcon } from '../../common/assets/icons';
import { ActionButton, Space, TextField } from '../../common/components';
import colors from '../../constants/colors';

import { fontSize } from '../../constants/typography';
import { ChatAction } from './components';

interface ChatScreenProps {}

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

  return (
    <View style={{ paddingTop: insets.top, flex: 1, justifyContent: 'space-between' }}>
      <View>
        <Text style={{ fontSize: fontSize.large, fontWeight: 'bold' }}>💬 Chatbot</Text>
      </View>

      <View>
        <Text>E BOOOOOOOSSS</Text>
        <Text>E BOOOOOOOSSS</Text>
        <Text>E BOOOOOOOSSS</Text>
        <Text>E BOOOOOOOSSS</Text>
        <Text>E BOOOOOOOSSS</Text>
      </View>

      <View
        style={{
          backgroundColor: colors.white,
          paddingHorizontal: 15,
          paddingVertical: 15,
          borderTopLeftRadius: 14,
          borderBottomRightRadius: 14,
          paddingBottom: insets.bottom,
        }}>
        {actionsExpanded && (
          <View style={{ marginBottom: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <ChatAction title="Koliko iznosi moj budzet" style={{ flex: 3 }} />
              <Space width={10} />
              <ChatAction title="O aplikaciji" style={{ flex: 2 }} />
            </View>
            <Space height={8} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <ChatAction title="Promjena budzeta" style={{ flex: 3 }} />
              <Space width={12} />
              <ChatAction title="Moje grupe" style={{ flex: 2 }} />
            </View>
            <Space height={8} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <ChatAction title="Prikazi prosjecnu potrosnju po mjesecima" style={{ flex: 1 }} />
            </View>
          </View>
        )}

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <ActionButton
            icon={PlusIcon}
            style={{ borderRadius: 20, marginRight: 10 }}
            onPress={() => setActionsExpanded(!actionsExpanded)}
          />

          <TextField value="boss" style={{ flex: 1 }} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChatScreen;
