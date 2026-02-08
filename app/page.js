import Link from "next/link";
import globalcss from "./globals.css";
export default function Home() {
  console.log("HELLO WORLD");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-6">
      
      <h1 className="text-4xl font-bold text-blue-600 underline">
        Hello, Next.js!
      </h1>

      <div className="flex gap-4">
        <Link
          href="/About"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          About
        </Link>

        <Link
          href="/Services"
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Services
        </Link>

        <Link
          href="/Blogs"
          className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
        >
          Blogs
        </Link>
      </div>

    </div>
  );
}
