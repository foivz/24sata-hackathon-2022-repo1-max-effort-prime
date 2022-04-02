import React from "react";
import { View, Text } from "react-native";

interface ButtonProps {
  text: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({ text }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text>{text}</Text>
    </View>
  );
};

export default Button;
