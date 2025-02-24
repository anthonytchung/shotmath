import React, { useState, FormEvent } from 'react';

const DrinkCalculator: React.FC = () => {
  const [volume, setVolume] = useState<string>('');
  const [percentage, setPercentage] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const vol = parseFloat(volume);
    const perc = parseFloat(percentage);

    if (isNaN(vol) || isNaN(perc) || vol <= 0 || perc <= 0) {
      setResult("Please enter valid positive numbers.");
      return;
    }

    // Calculate pure alcohol in grams: volume * (percentage / 100) * 0.789
    const pureAlcohol = vol * (perc / 100) * 0.789;
    // Each standard drink is defined as 14 grams of alcohol
    const drinks = pureAlcohol / 14;
    setResult(`Standard Drinks: ${drinks.toFixed(2)}`);
  };

  return (
    <div className="">
        <h1>Drink Calculator</h1>
    </div>
  );
};

export default DrinkCalculator;
