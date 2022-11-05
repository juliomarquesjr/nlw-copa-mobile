import { createContext } from "react";

interface UserProps {
  name: string;
  avatarUrl: string;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  async function signIn() {
    console.log("Vamos logar");
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: {
          name: "Julio Marques",
          avatarUrl: "https://github.com/juliomarquesjr.png",
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
