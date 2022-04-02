import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { PlusIcon } from "../../common/assets/icons";
import ActionButton from "../../common/components/ActionButton";
import colors from "../../constants/colors";
import ToggleButton from "./components/ToggleButton";

const TabTwoScreen = () => {
  return (
    <SafeAreaView edges={["top", "right", "left"]} style={styles.container}>
      <Text>🛒 Lista za kupnju</Text>
      <ActionButton icon={PlusIcon} color={colors.green} />
      <ToggleButton text="Redovna" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default TabTwoScreen;
