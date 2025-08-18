import { StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../constant/Color";

export default function Inputs({ myConfig, title }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={styles.inputs} {...myConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: '2%',
  },
  inputs: {
    borderWidth: 1.5,
    borderColor: Colors.gray,
    borderRadius: 8,
    padding: 10,
    marginTop: '1%',
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
