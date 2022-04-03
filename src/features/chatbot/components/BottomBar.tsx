import React, { useRef, useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { ActionButton } from '../../../common/components';
import Icon from '../../../common/components/Icon';

import { PlusIcon } from '../../../common/assets/icons';
import colors from '../../../constants/colors';
import { SendIcon } from '../assets';

interface BottomBarProps {
  onButtonPress: () => void;
  onSend: (msg: string) => void;
}

const BottomBar: React.FC<BottomBarProps> = ({ onButtonPress, onSend }) => {
  const [message, setMessage] = useState<string>('');
  const textInputRef = useRef<TextInput>(null);

  return (
    <View style={styles.container}>
      <ActionButton icon={PlusIcon} style={styles.button} onPress={onButtonPress} />

      <View style={styles.textInputContainer}>
        <TextInput value={message} onChangeText={(val) => setMessage(val)} style={styles.flex} ref={textInputRef} />
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => {
            onSend(message);
            setMessage('');
            textInputRef.current?.blur();
          }}>
          <Icon icon={SendIcon} width={25} height={25} stroke={colors.green} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputContainer: {
    flex: 1,
    backgroundColor: colors.whiteSmoke,
    borderRadius: 10,
    paddingVertical: 12,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    marginRight: 10,
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
  },
});

export default BottomBar;
