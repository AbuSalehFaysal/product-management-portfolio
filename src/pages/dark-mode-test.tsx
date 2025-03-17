import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";

export default function DarkModeTest() {
  const [isDarkModeClass, setIsDarkModeClass] = useState(false);
  const [count, setCount] = useState(0);
  const [storedTheme, setStoredTheme] = useState("loading...");

  useEffect(() => {
    // Set the localStorage theme once mounted on client
    setStoredTheme(localStorage.getItem("theme") || "not set");

    // Check and update dark mode status every second
    const interval = setInterval(() => {
      const hasDarkClass = document.documentElement.classList.contains("dark");
      setIsDarkModeClass(hasDarkClass);
      setCount((prev) => prev + 1);

      // Keep the theme value up to date
      setStoredTheme(localStorage.getItem("theme") || "not set");
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleManually = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
    } else {
      html.classList.add("dark");
    }
  };

  return (
    <Layout title="Dark Mode Test">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
          Dark Mode Testing
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-300">
              Status Information
            </h2>
            <p className="mb-2 text-gray-600 dark:text-gray-400">
              <strong>Dark Mode Class Present:</strong>{" "}
              {isDarkModeClass ? "Yes" : "No"}
            </p>
            <p className="mb-2 text-gray-600 dark:text-gray-400">
              <strong>Check Count:</strong> {count}
            </p>
            <p className="mb-2 text-gray-600 dark:text-gray-400">
              <strong>localStorage Theme:</strong> {storedTheme}
            </p>
          </div>

          <div className="p-6 bg-blue-50 dark:bg-blue-900 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">
              Direct Toggle Test
            </h2>
            <p className="mb-4 text-blue-600 dark:text-blue-200">
              This button directly toggles the dark class without using context.
            </p>
            <button
              onClick={toggleManually}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
            >
              Toggle Dark Mode Manually
            </button>
          </div>
        </div>

        {/* Color Test Swatches */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            Color Swatches Test
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="h-20 bg-red-500 dark:bg-red-700 rounded flex items-center justify-center">
              <span className="text-white font-medium">Red</span>
            </div>
            <div className="h-20 bg-blue-500 dark:bg-blue-700 rounded flex items-center justify-center">
              <span className="text-white font-medium">Blue</span>
            </div>
            <div className="h-20 bg-green-500 dark:bg-green-700 rounded flex items-center justify-center">
              <span className="text-white font-medium">Green</span>
            </div>
            <div className="h-20 bg-yellow-500 dark:bg-yellow-700 rounded flex items-center justify-center">
              <span className="text-white font-medium">Yellow</span>
            </div>
            <div className="h-20 bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center">
              <span className="text-gray-800 dark:text-white font-medium">
                Gray
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
