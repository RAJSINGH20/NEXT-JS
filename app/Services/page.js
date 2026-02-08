import Link from "next/link";
import globalcss from "../globals.css";

export default function Services() {
  return <>Service Page
      <h1 className="text-4xl font-bold text-blue-600 underline mb-6">Our Services</h1>
      <ul className="list-disc pl-6 space-y-3">
        <li> 
        
        <Link href="Services/WebDev">Web Development </Link></li>
      </ul>
    
  </>

}