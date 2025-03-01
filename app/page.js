export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center fixed w-full top-0">
        <h1 className="text-2xl font-bold text-blue-600 flex items-center">
          <img src="/ince-spider.png" alt="Ince Spider Mascot" className="w-8 h-8 mr-2" /> Ince
        </h1>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Home</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500">How It Works</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Get a Quote</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Contact</a></li>
        </ul>
        <button className="md:hidden text-gray-700">☰</button>
      </nav>

      {/* Hero Section with Mascot */}
      <header className="flex-1 flex flex-col items-center justify-center text-center p-8 mt-20">
        <img src="/ince-spider.png" alt="Ince Spider Mascot" className="w-32 h-32 mb-4 animate-bounce" />
        <h2 className="text-5xl font-extrabold text-gray-800">
          Smarter Auto Insurance with <span className="text-blue-600">Ince</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl">
          Let Ince crawl through the insurance web to find the best coverage at the lowest rates.
        </p>
        <a href="#" className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
          Get a Free Quote
        </a>
      </header>

      {/* How It Works Section */}
      <section className="py-12 px-6 text-center bg-blue-50">
        <h3 className="text-3xl font-bold text-blue-600">How It Works</h3>
        <p className="mt-2 text-gray-700">Ince analyzes complex insurance pricing to optimize your coverage and save you money.</p>
        <div className="flex flex-col md:flex-row justify-center mt-6 space-y-6 md:space-y-0 md:space-x-12">
          <div className="bg-white p-6 rounded-lg shadow-md w-72">
            <h4 className="text-xl font-semibold text-blue-600">1. Enter Your Details</h4>
            <p className="text-gray-600">Provide basic information about your car and driving history.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-72">
            <h4 className="text-xl font-semibold text-blue-600">2. AI Analysis</h4>
            <p className="text-gray-600">Ince compares thousands of pricing metrics to find the best rates.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-72">
            <h4 className="text-xl font-semibold text-blue-600">3. Get Optimized Coverage</h4>
            <p className="text-gray-600">See cost-saving recommendations tailored to your needs.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-12">
        <p>© 2024 Ince - Smarter Auto Insurance</p>
      </footer>
    </div>
  );
}
