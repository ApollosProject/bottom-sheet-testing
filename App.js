import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import BottomSheetComponent from "./BottomSheetComponent";

export default function App() {
  return (
    <GestureHandlerRootView style={styles.gestureHandlerRootView}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={[styles.bold, styles.center]}>
            The goal of the app is to have a 3-step Bottom Sheet.
          </Text>
          <Text>
            1. The sheet is presented with a CTA prompting the user to interact
          </Text>
          <Text>
            2. The sheet is partially expanded with a text input focused
          </Text>
          <Text>3. The sheet is fully expanded with a text input focused</Text>
        </View>
        <StatusBar style="auto" />

        <BottomSheetComponent />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gestureHandlerRootView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    alignItems: "center",
    paddingTop: 150,
  },
  textContainer: {
    width: 250,
  },
  bold: {
    fontWeight: "bold",
  },
  center: {
    textAlign: "center",
  },
});
