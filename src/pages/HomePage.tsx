import DrinkCalculator from "../components/DrinkCalculator";
import DrinkTracker from "../components/DrinkTracker";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header Section */}
      <header className="bg-blue-900 text-white p-4">
        <h1 className="text-3xl font-bold text-center">ShotMath</h1>
        <p className="text-center mt-2 text-sm">
          Calculate and track your drinks easily on the go
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-full mx-auto p-4">
        {/* Introduction */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">What is ShotMath?</h2>
          <p className="mb-2 text-sm">
            ShotMath is a simple tool to help you determine the number of standard alcoholic drinks in your beverage. Track your intake and stay safe.
          </p>
        </section>

        {/* Calculator Component */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Calculator</h2>
          <div className="border-2 border-black p-4 rounded bg-gray-50">
            <DrinkCalculator />
          </div>
        </section>

        {/* Tracker Component */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Tracker</h2>
          <div className="border-2 border-black p-4 rounded bg-gray-50">
            <DrinkTracker />
          </div>
        </section>

        {/* Disclaimer */}
        <section className="text-xs text-gray-600">
          <p>
            <strong>Disclaimer:</strong> This calculator is for educational purposes only. The values are estimates and should not be used as a basis for personal decisions regarding alcohol consumption.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center p-3 text-xs text-gray-600">
        &copy; {new Date().getFullYear()} ShotMath. All rights reserved.
      </footer>
    </div>
  );
}
