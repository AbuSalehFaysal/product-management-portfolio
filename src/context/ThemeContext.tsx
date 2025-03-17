import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isInitialized: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Always initialize with 'light' for server-side rendering to prevent hydration mismatch
  const [theme, setTheme] = useState<Theme>("light");
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize theme based on localStorage or system preference
  useEffect(() => {
    // Only run this in the browser
    if (typeof window !== "undefined") {
      try {
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;

        const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

        console.log("Initializing theme:", initialTheme);
        setTheme(initialTheme);

        // Apply the theme immediately - FORCE it
        if (initialTheme === "dark") {
          console.log("Adding dark class to HTML element");
          document.documentElement.classList.add("dark");
        } else {
          console.log("Removing dark class from HTML element");
          document.documentElement.classList.remove("dark");
        }

        // Check if the class was actually applied
        setTimeout(() => {
          console.log(
            "Dark class is present:",
            document.documentElement.classList.contains("dark")
          );
        }, 100);

        setIsInitialized(true);
      } catch (error) {
        console.error("Error initializing theme:", error);
        // Ensure we're initialized even after an error
        setIsInitialized(true);
      }
    }
  }, []);

  // Apply theme changes
  useEffect(() => {
    // Skip if we haven't initialized yet to avoid overriding the initial theme
    if (!isInitialized) return;

    try {
      console.log("Applying theme change:", theme);

      // Force the application of the class with a direct DOM manipulation
      if (theme === "dark") {
        console.log("Setting dark theme - adding class");
        document.documentElement.classList.add("dark");
      } else {
        console.log("Setting light theme - removing class");
        document.documentElement.classList.remove("dark");
      }

      // Verify the class was applied
      setTimeout(() => {
        const hasDarkClass =
          document.documentElement.classList.contains("dark");
        console.log("Dark class is present after change:", hasDarkClass);
        console.log(
          "Current HTML classes:",
          document.documentElement.className
        );
      }, 100);

      localStorage.setItem("theme", theme);
    } catch (error) {
      console.error("Error applying theme change:", error);
    }
  }, [theme, isInitialized]);

  const toggleTheme = () => {
    try {
      console.log("Toggle theme called, current theme:", theme);
      setTheme((prevTheme) => {
        const newTheme = prevTheme === "light" ? "dark" : "light";
        console.log("Setting new theme:", newTheme);
        return newTheme;
      });
    } catch (error) {
      console.error("Error toggling theme:", error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isInitialized }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
