import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, use, useEffect, type PropsWithChildren } from "react";
import { Alert } from "react-native";
import { auth } from "../firebase";
import { useStorageState } from "./useStorageState";

const AuthContext = createContext<{
  signUp: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  session?: string | null;
  isLoading: boolean;
}>({
  signUp: async () => {},
  login: async () => {},
  logout: async () => {},

  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = use(AuthContext);
  if (!value) {
    throw new Error("useSession must be wrapped in a <SessionProvider />");
  }
  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");
  console.log(auth.currentUser);

  // KNOWS IF A USER IS LOGGED IN TO SET OR REFRESH A TOKEN
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setSession(token);
      } else {
        setSession(null);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signUp: async (email, password) => {
          try {
            await createUserWithEmailAndPassword(auth, email, password);
          } catch (error: any) {
            Alert.alert("Error", error);
          }
        },
        login: async (email, password) => {
          try {
            await signInWithEmailAndPassword(auth, email, password);
          } catch (error: any) {
            Alert.alert("Error", error);
          }
        },
        logout: async () => {
          try {
            await signOut(auth);
          } catch (error: any) {
            Alert.alert("Error", error);
          }
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
