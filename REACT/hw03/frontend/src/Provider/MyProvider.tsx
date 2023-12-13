//import { MyContext } from '../Context/MyContext';
import { PropsWithChildren, createContext, useContext, useState } from "react";

export const MyContext = createContext<ContextType>({
  siteName: "dark",
  setSiteName: (theme: string) => {},
});

export type ContextType = {
  siteName: string;
  setSiteName: (siteName: string) => void;
};

export const ThemeContext = createContext<ContextType | undefined>(undefined);

export const MyProvider = ({ children }: PropsWithChildren<{}>) => {
  const [siteName, setSiteName] = useState<ContextType["siteName"]>("");

  return (
    <MyContext.Provider value={{ siteName: siteName, setSiteName: setSiteName }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("useThemeContext must be used inside the ThemeProvider");
  }

  return context;
};
