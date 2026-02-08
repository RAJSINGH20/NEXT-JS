
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
      <h1 className="text-2xl font-bold">Hello World</h1>
        {children}
      </body>
    </html>
  );
} 
