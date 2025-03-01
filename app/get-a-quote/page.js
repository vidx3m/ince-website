export default function GetQuote() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 p-8">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Get a Free Insurance Quote</h2>
      <form className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        {/* Name */}
        <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
        <input type="text" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="John Doe" required />

        {/* Email */}
        <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">Email</label>
        <input type="email" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="email@example.com" required />

        {/* Postal Code */}
        <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">Postal Code</label>
        <input type="text" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="A1B 2C3" required />

        {/* Vehicle Make/Model/Year */}
        <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">Vehicle Make & Model</label>
        <input type="text" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Toyota Camry" required />

        <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">Vehicle Year</label>
        <input type="number" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="2022" required />

        {/* Driving History */}
        <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">Any Claims or Tickets?</label>
        <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="none">No claims or tickets</option>
          <option value="minor">Minor ticket(s)</option>
          <option value="major">Major ticket(s) or accident</option>
        </select>

        {/* Submit Button */}
        <button className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
          Get My Quote
        </button>
      </form>
    </div>
  );
}
