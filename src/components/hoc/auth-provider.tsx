import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

interface Auth {
  accessToken: string;
  // refreshToken: string;
  name: string;
  email: string;
  role: string;
  // Define your authentication state properties here
}

interface AuthContextType {
  auth: Auth;
  setAuth: React.Dispatch<React.SetStateAction<Auth>>;
  persist: boolean | null; // Change the type of persist to boolean | null
  setPersist: React.Dispatch<React.SetStateAction<boolean | null>>; // Change the type of setPersist accordingly
}

const defaultAuthContext: AuthContextType = {
  auth: {
    accessToken: "",
    // refreshToken: "",
    name: "",
    email: "",
    role: "",
  },
  setAuth: () => {},
  persist: null, // Set the default value to null
  setPersist: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

type AuthProviderProps = PropsWithChildren<{}>;

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<Auth>({
    accessToken: "",
    // refreshToken: "",
    name: "",
    email: "",
    role: "",
  }); // Specify the type of auth state
  const [persist, setPersist] = useState<boolean | null>(() => {
    const storedPersist = localStorage.getItem("persist");
    return storedPersist ? JSON.parse(storedPersist) : false;
  }); // Change the type and parsing logic

  return (
    <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
