// import { useContext, createContext, useState } from "react";

// const ThemeContext = createContext();

// export const useTheme = () => useContext(ThemeContext);

// export default function ThemeProvider({ children }) {
//   const [darkMode, setDarkMode] = useState(false);
//   const toggleDarkMode = () => {
//     setDarkMode((prevMode) => !prevMode);
//   };

//   return (
//     <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }
