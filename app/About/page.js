import global from "../globals.css";
export default function About() {
  console.log("About")
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <h1 className="text-4xl font-bold text-blue-600 underline mb-6">About Us</h1>
      <p>This is the about page of our Next.js application.</p>
    </div>
  );
}