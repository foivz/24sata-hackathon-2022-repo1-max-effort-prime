import React from "react";
import { View, Text } from "react-native";
import colors from "../../../constants/colors";

interface ToggleButtonProps {
  text: string;
}

const ToggleButton: React.FunctionComponent<ToggleButtonProps> = ({ text }) => {
  return (
    <View style={{ padding: 20, backgroundColor: colors.white, borderRadius: 14, justifyContent: "center", alignItems: "center" }}>
      <Text>Redovna</Text>
    </View>
  );
};

export default ToggleButton;
