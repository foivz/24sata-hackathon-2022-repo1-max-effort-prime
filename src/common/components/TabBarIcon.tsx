import React from "react";
import { View, StyleSheet } from "react-native";

import Icon from "./Icon";

interface TabBarIconProps {
  icon: React.FunctionComponent;
  size: number;
  color: string;
  focused: boolean;
}

const TabBarIcon: React.FunctionComponent<TabBarIconProps> = ({ icon, size, color, focused }) => {
  return (
    <View style={styles.container}>
      <Icon icon={icon} width={size} height={size} stroke={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default TabBarIcon;
