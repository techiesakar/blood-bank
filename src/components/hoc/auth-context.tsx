import { Gender, User, UserRole } from "@/lib/types/user-type";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const AuthContext = createContext<ContextType>({} as ContextType);

type AuthProviderProps = PropsWithChildren;

export default function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser({
      id: "1",
      name: "Sakar Aryal",
      email: "techiesakar@gmail.com",
      role: "admin" as UserRole,
      gender: "male" as Gender,
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
