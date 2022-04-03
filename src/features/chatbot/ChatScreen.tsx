import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, KeyboardAvoidingView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { nanoid } from 'nanoid/non-secure';

import Message from './components/Message';
import BottomBar from './components/BottomBar';
import ChatActions from './components/ChatActions';

import { fontSize } from '../../constants/typography';
import colors from '../../constants/colors';
import { Space } from '../../common/components';
import { useAppDispatch, useAppSelector } from '../../common/store';
import { addMessage } from './store/chat';
import { updateUser } from './api/user';
import useUser from '../../common/hooks/useUser';

interface ChatScreenProps {}

const ChatScreen: React.FC<ChatScreenProps> = () => {
  const insets = useSafeAreaInsets();
  const { messages } = useAppSelector((state) => state.chat);
  const [actionsExpanded, setActionsExpanded] = useState<boolean>(false);
  const user = useUser();
  const dispatch = useAppDispatch();

  const handleSend = async (msg: string) => {
    dispatch(
      addMessage({
        id: nanoid(),
        type: 'sent',
        message: `${msg} HRK`,
      }),
    );

    await updateUser(user?._id, {
      monthlyBudget: Number(msg),
    });

    setTimeout(() => {
      dispatch(
        addMessage({
          id: nanoid(),
          type: 'received',
          message: `Promijenjeno! Tvoj novi mjesečni budžet iznosi ${msg} HRK.`,
        }),
      );
    }, 1500);
  };

  return (
    <KeyboardAvoidingView style={styles.flex} behavior="padding">
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <View>
          <Text style={styles.heading}>💬 Chatbot</Text>
        </View>

        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Message message={item.message} type={item.type} />}
          ItemSeparatorComponent={() => <Space height={15} />}
          contentContainerStyle={styles.contentContainer}
        />

        <View style={[styles.bottomSection, { paddingBottom: insets.bottom }]}>
          {actionsExpanded && <ChatActions onActionSelect={() => setActionsExpanded(false)} />}

          <BottomBar onButtonPress={() => setActionsExpanded(!actionsExpanded)} onSend={(message) => handleSend(message)} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: fontSize.large,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  contentContainer: {
    paddingTop: 20,
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  bottomSection: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderTopLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
});

export default ChatScreen;
