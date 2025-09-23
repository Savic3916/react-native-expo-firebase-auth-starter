import { SessionProvider, useSession } from "@/FIREBASE/auth-router/ctx";
import { SplashScreenController } from "@/FIREBASE/auth-router/splash";
import { Stack } from "expo-router";
import { Colors } from "../constant/Color";

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <SessionProvider>
      <SplashScreenController />
      <RootLayout />
    </SessionProvider>
  );
}

function RootLayout() {
  const { session } = useSession();

  return (
    <Stack screenOptions={{headerTintColor: Colors.white, headerStyle: {backgroundColor: Colors.header}, headerTitleAlign: 'center'}}>
      <Stack.Protected guard={session}>
        <Stack.Screen name="(protected)" options={{headerShown: false}}/>
      </Stack.Protected>

      <Stack.Protected guard={!session}>
        <Stack.Screen name="index" options={{headerShown: false}}/>
        <Stack.Screen name="login" options={{title: 'LOGIN'}}/>
        <Stack.Screen name="signup" options={{title: 'REGISTER'}}/>
      </Stack.Protected>
    </Stack>
  );
}
