import { Platform, Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../constant/Color";

export default function Button({ title }) {
  return (
    <Pressable style={({ pressed}) => pressed? [styles.buttonContainer, styles.pressed] : styles.buttonContainer }>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}
const shadow = Platform.select({
  android: { elevation: 4 },
  ios: {
    shadowColor: Colors.black,
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.header,
    borderWidth: 1,
    borderColor: Colors.header,
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    marginVertical: 10,
    ...shadow
  },
  title: {
    color: Colors.white,
    fontSize: 17,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  pressed: {
    opacity: 0.5,
  }
});
