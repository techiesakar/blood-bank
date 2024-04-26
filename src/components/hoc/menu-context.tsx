import React, { createContext, useContext, useEffect, useState } from "react";

type ContextType = {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};
export const MenuContext = createContext<ContextType | undefined>(undefined);

export function MenuContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentState = localStorage.getItem("sidebar-toggle");

  const [isActive, setIsActive] = useState(() =>
    currentState ? currentState === "true" : false
  );

  useEffect(() => {
    localStorage.setItem("sidebar-toggle", String(isActive));
  }, [isActive]);

  return (
    <MenuContext.Provider
      value={{
        isActive,
        setIsActive,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export const useMenuStatus = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("Wrap the parent component with with MenuContextProvider");
  }
  return context;
};
