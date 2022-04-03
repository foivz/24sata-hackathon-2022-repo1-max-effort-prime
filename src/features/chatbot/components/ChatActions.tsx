import React from 'react';
import { StyleSheet, View } from 'react-native';
import { nanoid } from 'nanoid/non-secure';

import { Space } from '../../../common/components';

import useUser from '../../../common/hooks/useUser';
import { useAppDispatch } from '../../../common/store';
import { getUser } from '../api/user';
import { addMessage } from '../store/chat';

import ChatAction from './ChatAction';

interface ChatActionsProps {
  onActionSelect: () => void;
}

const ChatActions: React.FC<ChatActionsProps> = ({ onActionSelect }) => {
  const dispatch = useAppDispatch();
  const user = useUser();

  const handleWhatsMyBudget = async () => {
    onActionSelect();
    dispatch(
      addMessage({
        id: nanoid(),
        type: 'sent',
        message: 'Koliko iznosi moj budžet?',
      }),
    );

    const userData = await getUser(user?._id);

    setTimeout(() => {
      dispatch(
        addMessage({
          id: nanoid(),
          type: 'received',
          message: `Tvoj mjesečni budžet je ${userData.monthlyBudget} HRK.`,
        }),
      );
    }, 500);
  };

  const handleChangeBudget = async () => {
    onActionSelect();
    dispatch(
      addMessage({
        id: nanoid(),
        type: 'sent',
        message: 'Promjena budžeta',
      }),
    );

    const userData = await getUser(user?._id);

    setTimeout(() => {
      dispatch(
        addMessage({
          id: nanoid(),
          type: 'received',
          message: `Tvoj trenutni mjesečni budžet iznosi ${userData.monthlyBudget} HRK. Unesi iznos novog željenog budžeta.`,
        }),
      );
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <ChatAction title="Koliko iznosi moj budžet?" style={{ flex: 4 }} onPress={handleWhatsMyBudget} />
        <Space width={10} />
        <ChatAction title="O aplikaciji" style={{ flex: 2 }} />
      </View>
      <Space height={8} />
      <View style={styles.flexRow}>
        <ChatAction title="Promjena budžeta" style={{ flex: 3 }} onPress={handleChangeBudget} />
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
  container: {
    marginBottom: 15,
  },
});

export default ChatActions;
