import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet, ViewStyle } from 'react-native';

import colors from '../../../constants/colors';
import { fontSize } from '../../../constants/typography';

interface ChatActionProps extends TouchableOpacityProps {
  title: string;
  style?: ViewStyle;
}

const ChatAction: React.FC<ChatActionProps> = ({ title, style, ...props }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} {...props}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    color: colors.white,
    fontSize: fontSize.small,
  },
});

export default ChatAction;
