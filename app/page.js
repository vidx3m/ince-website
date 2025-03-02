export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Navbar */}
      <nav className="fixed w-full top-0 flex justify-between items-center p-4">
        <h1 className="text-3xl font-ovo text-orange-500 text-center flex-1">Ince</h1>
        <button className="text-white text-2xl">☰</button>
      </nav>

      {/* Hero Section */}
      <header className="flex-1 flex flex-col items-center justify-center text-center p-8 mt-20">
        <h2 className="text-5xl font-extrabold">
          <span className="text-orange-500">In</span>surance simplif<span className="text-orange-500">ce</span>d
        </h2>
        
        {/* Selection Buttons & Input */}
        <div className="flex mt-6 space-x-4 items-center">
          <button className="bg-gray-700 px-6 py-3 text-lg rounded-lg shadow-md hover:bg-gray-600 transition">Home</button>
          <button className="bg-gray-700 px-6 py-3 text-lg rounded-lg shadow-md hover:bg-gray-600 transition">Auto</button>
          <div className="flex flex-col">
            <label className="text-gray-300 text-sm mb-1">Enter Postal Code</label>
            <input type="text" placeholder="A1B 2C3" className="px-4 py-3 rounded-lg border text-gray-900 bg-gray-300" />
          </div>
          <button className="bg-orange-500 text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-orange-600 transition">Start</button>
        </div>
      </header>

      {/* How It Works Section */}
      <section className="py-8 px-6 text-center text-sm">
        <h3 className="text-2xl font-bold text-orange-500">How It Works</h3>
        <p className="mt-2 text-gray-400">Ince analyzes complex insurance pricing to optimize your coverage and save you money.</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-12">
        <p>© 2024 Ince - Smarter Home & Auto Insurance</p>
      </footer>
    </div>
  );
}
