import { Image, Platform, Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../constant/Color";

// this component is used to create the Google and Facebook Button
export default function IconButton({ title, imageSource }) {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed
          ? [styles.buttonContainer, styles.pressed]
          : styles.buttonContainer
      }
    >
      <Image style={styles.image} source={imageSource} />
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
    ...shadow,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },
  image: {
    width: 25,
    height: 25,
  },
  title: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  pressed: {
    opacity: 0.5,
  },
});
