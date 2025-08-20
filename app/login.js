import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import EasyDemacation from "../components/EasyDemacation";
import IconButton from "../components/IconButton";
import Inputs from "../components/Inputs";
import { Colors } from "../constant/Color";

export default function login() {
  const [inputs, setInputs] = useState({
    email: { value: "", isValid: true },
    password: { value: "", isValid: true },
  });

  console.log(inputs);

  // FOR CHANGING AND BINDING TEXT IN THE TEXTINPUT
  function changeTextHandler(inputIdentifier, enteredText) {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifier]: { value: enteredText, isValid: true },
      };
    });
  }

  // BECOMES ACTIVE WHEN USERS PRESS THE LOGIN BUTTON
  function loginButtonHandler() {
    const userInput = {
      email: inputs.email.value,
      password: inputs.password.value,
    };

    //make a rule to know when the inputs valid
    const emaiIsValid =
      userInput.email.trim().length > 0 && //must not be empty
      userInput.email.includes("@") && //must include an @ character
      userInput.email.trim().charAt(0) != "@"; //the @ character must not be the only character there, must include a character before it
    const passwordIsValid =
      userInput.password.trim().length > 7 && //must be greater than 7 characters
      userInput.password.match(/\d/) != null && //must contain a number
      userInput.password.match(/[a-z]/) != null && //must contain a letter
      userInput.password.match(/[!@#$%^&*()_\-+{}|\:;"'<>.?/~]/) != null; //must include a sspecial character

    // is email is invalid
    if (!emaiIsValid) {
      setInputs((currentInputs) => {
        return {
          ...currentInputs,
          ["email"]: { value: userInput.email, isValid: false },
        };
      });
    }

    //if password is invalid
    if (!passwordIsValid) {
      setInputs((currentInputs) => {
        return {
          ...currentInputs,
          ["password"]: { value: userInput.password, isValid: false },
        };
      });
    }
  }

  return (
    <View style={styles.container}>
      <Inputs
        title="Email"
        myConfig={{
          placeholder: "e.g: savic3916@gmail.com",
          placeholderTextColor: Colors.gray,
          onChangeText: (text) => changeTextHandler("email", text),
          value: inputs.email.value,
        }}
      />
      {!inputs.email.isValid && (
        <Text style={styles.errorText}>E-mail must contain @</Text>
      )}
      <Inputs
        title="Password"
        myConfig={{
          placeholder: "e.g: john123@",
          placeholderTextColor: Colors.gray,
          onChangeText: (text) => changeTextHandler("password", text),
          value: inputs.password.value,
        }}
      />
      {!inputs.password.isValid && (
        <Text style={styles.errorText}>
          Password must contain text, number, and at least one special symbol
        </Text>
      )}

      <Button title="Login" onPress={loginButtonHandler} />
      <EasyDemacation />
      <IconButton
        title="Login With Google     "
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
    backgroundColor: Colors.white,
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
  errorText: {
    color: Colors.error,
    fontSize: 11,
    marginBottom: "2%",
  },
});
