export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">AutoShield AI</h1>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Home</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Get a Quote</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500">How It Works</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Contact</a></li>
        </ul>
        <button className="md:hidden text-gray-700">☰</button>
      </nav>

      {/* Hero Section */}
      <header className="flex-1 flex flex-col items-center justify-center text-center p-8">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Get the Best Auto Insurance Rates with AI
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl">
          AutoShield AI compares top insurers to find the most affordable and reliable coverage for you.
        </p>
        <a href="#" className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700">
          Get a Free Quote
        </a>
      </header>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© 2024 AutoShield AI - All rights reserved.</p>
      </footer>
    </div>
  );
}
