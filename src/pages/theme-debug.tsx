import { useTheme } from "@/context/ThemeContext";
import { useClientTheme } from "@/hooks/useClientTheme";
import { useEffect, useState } from "react";

export default function ThemeDebugPage() {
  const { theme, toggleTheme } = useTheme();
  const { isMounted } = useClientTheme();
  const [hasClass, setHasClass] = useState(false);

  // Check if html element has dark class
  useEffect(() => {
    if (isMounted) {
      const hasDarkClass = document.documentElement.classList.contains("dark");
      setHasClass(hasDarkClass);

      // Setup observer to track class changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === "class") {
            setHasClass(document.documentElement.classList.contains("dark"));
          }
        });
      });

      observer.observe(document.documentElement, { attributes: true });

      return () => observer.disconnect();
    }
  }, [isMounted]);

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  const manuallyToggleClass = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const localStorageTheme =
    typeof window !== "undefined" ? localStorage.getItem("theme") : null;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Theme Debugging</h1>

      <div className="space-y-4 mb-6">
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <p className="text-gray-800 dark:text-gray-200">
            <strong>Current theme value:</strong> {theme}
          </p>
          <p className="text-gray-800 dark:text-gray-200">
            <strong>Dark class on HTML:</strong> {hasClass ? "Yes" : "No"}
          </p>
          <p className="text-gray-800 dark:text-gray-200">
            <strong>localStorage theme value:</strong>{" "}
            {localStorageTheme || "not set"}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <button
            onClick={toggleTheme}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Toggle Theme (Context)
          </button>

          <button
            onClick={manuallyToggleClass}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Toggle Dark Class Directly
          </button>
        </div>

        <div className="mt-8">
          <div className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
            <p className="text-gray-800 dark:text-white">
              This text should change colors based on the theme.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
