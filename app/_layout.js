import { Stack } from "expo-router";
import { Colors } from '../constant/Color';

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerStyle: {backgroundColor: Colors.header}, headerTintColor: Colors.white}}>
      <Stack.Screen name="index" options={{title: "HOME", headerShown: false}}/>
      <Stack.Screen name="login" options={{title: "LOGIN", headerTitleAlign: 'center'}}/>
      <Stack.Screen name="signup" options={{title: "REGISTER", headerTitleAlign: 'center'}}/>
    </Stack>
  );
}
