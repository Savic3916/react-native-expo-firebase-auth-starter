import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constant/Color";

export default function index() {
  return (
    <View style={styles.container}>
      <Text style ={styles.text}>
        Proceed to Sign up: <Link style={styles.linkText} href={"/signup"}>Sign up</Link>
      </Text>

      <Text style={styles.text}>
        Proceed to Login: <Link style={styles.linkText} href={"/login"}>Login</Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
  },
  linkText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.header,
  }
});
