import { createContext, useContext, useState } from "react";

const themeContext = createContext({
  value: null,
  setVal: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const themeObj = {
    light: {
      tx1: "#050608ff", // Deep near-black - ठीक है
      tx2: "#1f1825ff", // थोड़ा richer, less muddy purple-black
      tx3: "#62586aff", // थोड़ा softer mid-tone contrast
      bg1: "#ede4edff", // थोड़ा lighter और थोड़ा transparent
      bg2: "#f2edf7ff", // Cleaner off-white with subtle lavender
      bg3: "#f7f5ffff", // थोड़ा softer mid-background
      br1: "#af91fbff", // थोड़ा less saturated border
      br2: "#cdbce9ff", // Softer secondary border
      grd1: "#ded2fb5c", // और transparent gradient
      grd2: "#f5f0fc4d", // Lighter gradient end
    },

    dark: {
      tx1: "#c7d6e5ff",
      tx2: "#bac5d1ff",
      tx3: "#929ea9ff",
      bg1: "#0d131eff",
      bg2: "#0e1319ff",
      bg3: "#080910ff",
      br1: "#515d8bff",
      br2: "#272a3dfc",
      grd1: "#243b674a",
      grd2: "#111927a5",
    },
  };
  return (
    <themeContext.Provider value={{ theme, themeObj, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export { ThemeProvider, themeContext };
