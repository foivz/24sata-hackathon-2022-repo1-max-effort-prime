import React from 'react';
import { StyleSheet, useWindowDimensions, View, ViewStyle } from 'react-native';

interface ModalContainerProps {
  style?: ViewStyle;
}

const ModalContainer: React.FunctionComponent<ModalContainerProps> = ({ children, style }) => {
  const { width, height } = useWindowDimensions();

  return <View style={[{ width: width * 0.85, maxHeight: height * 0.8 }, styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 25,
    borderRadius: 20,
  },
});

export default ModalContainer;
