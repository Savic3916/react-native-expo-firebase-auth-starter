import { StyleSheet, View } from "react-native";
import Button from "../components/Button";
import EasyDemacation from "../components/EasyDemacation";
import IconButton from "../components/IconButton";
import Inputs from "../components/Inputs";
import { Colors } from "../constant/Color";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Inputs title="Email" />
      <Inputs title="Password" />
      <Inputs title="Confirm Password" />
      <Button title="Register" />
      <EasyDemacation />
      <IconButton
        title="Login With Google    "
        imageSource={require("../assets/images/google.png")}
      />
      <IconButton
        title="Login With Facebook"
        imageSource={require("../assets/images/communication.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: Colors.background
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    marginBottom: "2%",
  },
  text: {
    fontWeight: "bold",
  },
  button: {
    marginTop: 10,
  },
});
