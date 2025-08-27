import { StyleSheet, Text, View } from "react-native";
import Button from "../../components/Button";
import { useSession } from "../../FIREBASE/auth-router/ctx";

export default function Welcome() {
  const { logout } = useSession();
  function logoutButtonHandler() {
    logout();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, Guest...</Text>
      <Button title="Logout" onPress={logoutButtonHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
});
