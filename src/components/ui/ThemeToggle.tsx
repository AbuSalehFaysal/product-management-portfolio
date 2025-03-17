import { useTheme } from "@/context/ThemeContext";
import { useClientTheme } from "@/hooks/useClientTheme";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, toggleTheme, isInitialized } = useTheme();
  const { isMounted } = useClientTheme();
  const [hasDarkClass, setHasDarkClass] = useState(false);

  // Track the actual theme for debugging
  useEffect(() => {
    if (isMounted) {
      // Check the actual class on HTML element
      const hasClass = document.documentElement.classList.contains("dark");
      setHasDarkClass(hasClass);

      console.log("ThemeToggle rendered with:", {
        themeContext: theme,
        darkClassOnHtml: hasClass,
        isInitialized,
      });
    }
  }, [theme, isMounted, isInitialized]);

  // Don't render the button until client-side hydration is complete
  if (!isMounted || !isInitialized) {
    return <div className="w-9 h-9"></div>; // Placeholder with same dimensions
  }

  const handleToggle = () => {
    console.log("Toggle button clicked, current state:", {
      themeContext: theme,
      darkClassOnHtml: hasDarkClass,
      isInitialized,
    });

    // Force the class toggle directly on the HTML element
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      setHasDarkClass(false);
      console.log("Force removed dark class");
    } else {
      document.documentElement.classList.add("dark");
      setHasDarkClass(true);
      console.log("Force added dark class");
    }

    // Also call the context toggle
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      className={`p-2 rounded-md ${
        theme === "dark"
          ? "bg-gray-700 text-gray-200"
          : "bg-gray-200 text-gray-800"
      }`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        // Sun icon for light mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        // Moon icon for dark mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
