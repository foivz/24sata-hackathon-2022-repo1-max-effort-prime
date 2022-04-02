import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../../../constants/colors';
import { fontSize } from '../../../constants/typography';

interface MessageProps {
  message: string;
  type: 'sent' | 'received';
}

const Message: React.FC<MessageProps> = ({ message, type }) => {
  if (type === 'received') {
    return (
      <View style={styles.flexRow}>
        <View style={styles.incoming}>
          <Text style={styles.receivedText}>{message}</Text>
        </View>
      </View>
    );
  }

  // Outgoing message
  return (
    <View style={styles.outgoing}>
      <Text style={styles.sentText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  incoming: {
    backgroundColor: colors.green,
    padding: 15,
    borderRadius: 20,
    borderTopLeftRadius: 0,
    marginRight: 38,
  },
  outgoing: {
    backgroundColor: colors.weakMint,
    padding: 15,
    borderRadius: 20,
    borderTopRightRadius: 0,
    marginLeft: 38,
    alignSelf: 'flex-end',
  },
  receivedText: {
    color: colors.white,
    fontSize: fontSize.small,
  },
  sentText: {
    fontSize: fontSize.small,
    color: colors.green,
  },
});

export default Message;
