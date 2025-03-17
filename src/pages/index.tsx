import Layout from "@/components/layout/Layout";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Home() {
  return (
    <Layout title="PM Portfolio - Home">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Welcome to My PM Portfolio</h1>
        <p className="text-lg mb-8">
          This is a showcase of my journey from engineering to product
          management.
        </p>

        <div className="p-6 bg-light-surface dark:bg-dark-surface rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Dark Mode Test</h2>
          <p className="mb-4">
            Try toggling the theme button in the header to switch between light
            and dark mode.
          </p>
          <div className="inline-block">
            <ThemeToggle />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-blue-50 dark:bg-blue-900 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">
              Engineering Background
            </h3>
            <p className="text-blue-600 dark:text-blue-200">
              With 3+ years of frontend development experience, I bring
              technical depth to product decisions.
            </p>
          </div>

          <div className="p-6 bg-green-50 dark:bg-green-900 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-300">
              Product Thinking
            </h3>
            <p className="text-green-600 dark:text-green-200">
              I focus on solving real user problems and creating business impact
              through thoughtful product solutions.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
