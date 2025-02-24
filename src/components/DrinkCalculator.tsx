import React, { useState, FormEvent } from 'react';

interface Preset {
  label: string;
  volume: string;
  percentage: string;
}

const presets: Preset[] = [
  { label: 'Custom', volume: '', percentage: '' },
  { label: '12 oz Light Beer (355 mL, 4.2%)', volume: '355', percentage: '4.2' },
  { label: '16 oz Regular Beer (473 mL, 5%)', volume: '473', percentage: '5' },
  { label: 'Soju (375 mL, 20%)', volume: '375', percentage: '20' },
  { label: 'Wine (750 mL, 12%)', volume: '750', percentage: '12' },
  { label: 'Whiskey (50 mL, 40%)', volume: '50', percentage: '40' },
  { label: 'Vodka (50 mL, 40%)', volume: '50', percentage: '40' },
];

const DrinkCalculator: React.FC = () => {
  const [volume, setVolume] = useState<string>('');
  const [percentage, setPercentage] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);

  const handlePresetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const presetIndex = parseInt(e.target.value, 10);
    const selectedPreset = presets[presetIndex];
    setVolume(selectedPreset.volume);
    setPercentage(selectedPreset.percentage);
  };

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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Drink Calculator</h1>
      
      {/* Preset Options */}
      <div className="mb-4">
        <label htmlFor="preset" className="block mb-1 font-semibold">
          Choose a preset:
        </label>
        <select
          id="preset"
          onChange={handlePresetChange}
          className="border p-2 rounded w-full"
          defaultValue="0"
        >
          {presets.map((preset, idx) => (
            <option key={idx} value={idx}>
              {preset.label}
            </option>
          ))}
        </select>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="volume" className="block mb-1">
            Bottle Volume (in mL):
          </label>
          <input
            type="number"
            id="volume"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="border p-2 rounded w-full"
            placeholder="Enter volume (e.g., 750)"
          />
        </div>
        <div>
          <label htmlFor="percentage" className="block mb-1">
            Alcohol Percentage (%):
          </label>
          <input
            type="number"
            id="percentage"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            className="border p-2 rounded w-full"
            placeholder="Enter percentage (e.g., 13.5)"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:cursor-pointer">
          Calculate
        </button>
      </form>
      {result && <p className="mt-4 text-lg">{result}</p>}
    </div>
  );
};

export default DrinkCalculator;
