import globalcss from "../../../app/globals.css";

export default function WebDev() {
  console.log("Web Development Services")
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <h1 className="text-4xl font-bold text-blue-600 underline mb-6">Web Development Services</h1>
      <p className="text-lg text-gray-700">Welcome to our web development services page.</p>
    </div>
  );
}