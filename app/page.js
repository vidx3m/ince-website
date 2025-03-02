import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [postalCode, setPostalCode] = useState('');

  const handleInputChange = (e) => {
    setPostalCode(e.target.value);
  };

  const handleStartClick = () => {
    // Redirect to the quote page with the postal code
    if (postalCode) {
      window.location.href = `/get-a-quote?postalCode=${postalCode}`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold font-ovo text-center">
        Insurance simplified, <span className="text-orange-500">Ince</span>
      </h1>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
        <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl">Home</button>
        <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl">Auto</button>
        <input
          type="text"
          placeholder="Enter Postal Code"
          value={postalCode}
          onChange={handleInputChange}
          className="px-4 py-3 text-black rounded-xl w-64"
        />
        <button
          onClick={handleStartClick}
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl"
        >
          Start
        </button>
      </div>
      <div className="mt-10 text-center text-sm max-w-xl">
        <p className="text-gray-400">Our AI-driven platform finds the best insurance coverage at the best price, identifying inefficiencies and optimizing your savings.</p>
      </div>
    </div>
  );
}
