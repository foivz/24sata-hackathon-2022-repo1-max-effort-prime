import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../src/constants/colors";
import { fontSize } from "../src/constants/typography";

const TabOneScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bok, Filip!</Text>
      <View style={{ backgroundColor: colors.white, padding: 27, borderRadius: 20 }}>
        <Text>104 HRK</Text>
        <Text>Potrošnja ovaj mjesec</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: fontSize.extraLarge,
    fontWeight: "bold",
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default TabOneScreen;
