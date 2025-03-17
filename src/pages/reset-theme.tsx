import { useEffect, useState } from "react";

export default function ResetThemePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check current state
    const hasDarkClass = document.documentElement.classList.contains("dark");
    setIsDarkMode(hasDarkClass);
    setIsLoaded(true);
  }, []);

  const resetTheme = () => {
    // Clear localStorage
    localStorage.removeItem("theme");

    // Remove dark class
    document.documentElement.classList.remove("dark");

    // Update state
    setIsDarkMode(false);

    // Reload page to ensure everything is reset
    window.location.reload();
  };

  const setLightMode = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
    setIsDarkMode(false);
  };

  const setDarkMode = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
    setIsDarkMode(true);
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Theme Reset Utility</h1>

      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg mb-6">
        <p className="text-gray-800 dark:text-gray-200 mb-2">
          <strong>Current dark mode status:</strong> {isDarkMode ? "ON" : "OFF"}
        </p>
        <p className="text-gray-800 dark:text-gray-200">
          <strong>localStorage theme value:</strong>{" "}
          {typeof window !== "undefined"
            ? localStorage.getItem("theme") || "not set"
            : "unknown"}
        </p>
      </div>

      <div className="space-x-4">
        <button
          onClick={resetTheme}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Reset Theme (Clear All)
        </button>

        <button
          onClick={setLightMode}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        >
          Force Light Mode
        </button>

        <button
          onClick={setDarkMode}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Force Dark Mode
        </button>
      </div>

      <div className="mt-8 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
        <p className="text-gray-800 dark:text-white">
          This text should be dark in light mode and light in dark mode.
        </p>
      </div>
    </div>
  );
}
