
import Link from "next/link";
export default function Home() {
  console.log("HELLO WORLD")
  return (
    <>
      <h1 className="text-4xl font-bold underline">
        Hello, Next.js!
      </h1>
      <Link href="/About">About</Link> <br />
      <Link href="/Services">Services</Link> <br /> 
      <Link href="/Blogs">Blogs</Link>
    </>
  );
}
