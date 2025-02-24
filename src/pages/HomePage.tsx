import DrinkCalculator from "../components/DrinkCalculator";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header Section */}
      <header className="bg-blue-900 text-white p-4">
        <h1 className="text-4xl font-bold text-center">ShotMath</h1>
        <p className="text-center mt-2">
          Calculate the number of standard drinks in your beverage
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6">
        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">What is ShotMath?</h2>
          <p className="mb-4">
            ShotMath is a simple, user-friendly tool designed to help you determine the number of standard alcoholic drinks in your beverage. Whether you're tracking your intake or just curious, this calculator provides an easy way to convert bottle volume and alcohol percentage into standard drink equivalents. In the U.S., one standard drink contains 14 grams of pure alcohol.
          </p>
          <p>
            By inputting the container size and the alcohol by volume (ABV), you can quickly see how many standard drinks your beverage holds.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-8 border-t border-gray-300 pt-4">
          <h2 className="text-2xl font-bold mb-2">How to Use</h2>
          <ul className="list-disc ml-6">
            <li>Enter the bottle volume in milliliters (mL).</li>
            <li>Enter the alcohol percentage (ABV) of the beverage.</li>
            <li>Click on "Calculate" to view the number of standard drinks.</li>
          </ul>
        </section>

        {/* Calculator Component */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Calculator</h2>
          <div className="border-2 border-black p-4 rounded bg-gray-50">
            <DrinkCalculator />
          </div>
        </section>

        {/* Disclaimer */}
        <section className="text-sm text-gray-600">
          <p>
            <strong>Disclaimer:</strong> This calculator is for educational purposes only. The calculated values are estimates and should not be used as a basis for medical, legal, or personal decisions regarding alcohol consumption. Please drink responsibly.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} ShotMath. All rights reserved.
      </footer>
    </div>
  );
}
