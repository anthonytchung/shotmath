import React, { useState } from 'react';

interface Drink {
  name: string;
  proof: number;
  count: number;
}

const DrinkTracker: React.FC = () => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [name, setName] = useState('');
  const [proof, setProof] = useState('');
  const [count, setCount] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const drinkProof = parseFloat(proof);
    const drinkCount = parseFloat(count);

    // Basic validation
    if (!name || isNaN(drinkProof) || isNaN(drinkCount) || drinkProof <= 0 || drinkCount <= 0) {
      return;
    }

    const newDrink: Drink = {
      name,
      proof: drinkProof,
      count: drinkCount,
    };

    setDrinks([...drinks, newDrink]);
    setName('');
    setProof('');
    setCount('');
  };

  const totalDrinks = drinks.reduce((acc, drink) => acc + drink.count, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Drink Tracker</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Drink Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded w-full"
            placeholder="e.g., Beer, Soju, Whiskey"
          />
        </div>
        <div>
          <label htmlFor="proof" className="block mb-1">Proof:</label>
          <input
            type="number"
            id="proof"
            value={proof}
            onChange={(e) => setProof(e.target.value)}
            className="border p-2 rounded w-full"
            placeholder="Enter drink proof (e.g., 40)"
          />
        </div>
        <div>
          <label htmlFor="count" className="block mb-1">Number of Drinks Consumed:</label>
          <input
            type="number"
            id="count"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            className="border p-2 rounded w-full"
            placeholder="e.g., 2"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Drink
        </button>
      </form>

      {drinks.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Drink History</h2>
          <ul>
            {drinks.map((drink, index) => (
              <li key={index} className="mb-2">
                {drink.count} x {drink.name} (Proof: {drink.proof})
              </li>
            ))}
          </ul>
          <div className="mt-4 font-bold">Total Drinks: {totalDrinks}</div>
        </div>
      )}
    </div>
  );
};

export default DrinkTracker;
