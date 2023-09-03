import { createContext, useContext, useEffect, useState } from 'react';

const themeContext = createContext(null);

const useThemeContext = () => useContext(themeContext);

const ThemeProvider = ({ children, myCB }) => {
  const THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
  };
  const [theme, setTheme] = useState(THEMES.LIGHT);
  const toggleTheme = () => {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  };

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {/* {myCB(theme)} */}
      {children(theme)}
    </themeContext.Provider>
  );
};

export { useThemeContext, ThemeProvider };
