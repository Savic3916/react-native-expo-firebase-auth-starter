import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constant/Color";

export default function EasyDemacation() {
  return (
    <View style={styles.container}>
      <View style={styles.demacation}/>
        <Text style={styles.text}> or </Text>
      <View style={styles.demacation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: "2%",
    flexDirection: "row",
    alignItems: 'center',
  },
  demacation: {
    flex: 1,
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
  },
  text: {
    color: Colors.gray,
    fontWeight: 'bold',
  }
});
