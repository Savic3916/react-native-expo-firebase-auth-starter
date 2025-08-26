import { SessionProvider, useSession } from "@/FIREBASE/auth-router/ctx";
import { SplashScreenController } from "@/FIREBASE/auth-router/splash";
import { Stack } from "expo-router";

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
    <Stack>
      <Stack.Protected guard={session}>
        <Stack.Screen name="(protected)" />
      </Stack.Protected>

      <Stack.Protected guard={!session}>
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
      </Stack.Protected>
    </Stack>
  );
}
