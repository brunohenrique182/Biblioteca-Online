import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button, View } from "react-native";

export default function Estante() {
  return (
    <View style={styles.container}>
      <Text>Estante page</Text>
      <StatusBar style="auto" />
      <Button title="go to perfil"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
