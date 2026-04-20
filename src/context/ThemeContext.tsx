import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { hexToHsl, PRIMARY_COLOR_PRESETS } from "../lib/colors";

interface ThemeContextType {
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [primaryColor, setPrimaryColor] = useState<string>(
    () => PRIMARY_COLOR_PRESETS[0].value,
  );

  useLayoutEffect(() => {
    const root = window.document.documentElement;

    // Handle Primary Color
    const hslValue = hexToHsl(primaryColor);
    root.style.setProperty("--primary", hslValue);

    // Update ring color as well for consistency
    root.style.setProperty("--ring", hslValue);

    localStorage.setItem("primaryColor", primaryColor);
  }, [primaryColor]);

  return (
    <ThemeContext.Provider
      value={{
        primaryColor,
        setPrimaryColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
