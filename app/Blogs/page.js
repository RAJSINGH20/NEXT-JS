import React from 'react'
import globalcss from "../globals.css"; 

export const Blogs = async({params}) => {
    console.log(await params)
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <h1 className="text-4xl font-bold text-blue-600 underline mb-6">Blogs Page</h1>
        <ul className="list-disc pl-6 space-y-3">
            <li className="text-lg text-gray-700 hover:text-blue-600 transition cursor-pointer"> <a href="/Blogs/1/"> Blog 1</a></li>
            <li className="text-lg text-gray-700 hover:text-blue-600 transition cursor-pointer"> <a href="/Blogs/2/">Blog 2</a></li>
            <li className="text-lg text-gray-700 hover:text-blue-600 transition cursor-pointer"> <a href="/Blogs/3/">Blog 3</a></li>
        </ul>
    </div>
  )
}

export default Blogs