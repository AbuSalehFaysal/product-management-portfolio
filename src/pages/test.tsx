export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">
        Tailwind Test Page
      </h1>
      <p className="text-gray-700 mb-6">
        This page tests if Tailwind CSS is working properly.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-red-100 p-4 rounded-lg">Red Background</div>
        <div className="bg-blue-100 p-4 rounded-lg">Blue Background</div>
        <div className="bg-green-100 p-4 rounded-lg">Green Background</div>
        <div className="bg-yellow-100 p-4 rounded-lg">Yellow Background</div>
      </div>

      <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Test Button
      </button>
    </div>
  );
}
