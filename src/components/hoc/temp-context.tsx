import { PropsWithChildren, createContext, useState } from "react";
type ContextType = {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
};

const TempContext = createContext<ContextType>({} as ContextType);
type AuthProviderProps = PropsWithChildren;

export default function TempContextProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState("");

  return (
    <TempContext.Provider value={{ token, setToken }}>
      {children}
    </TempContext.Provider>
  );
}
