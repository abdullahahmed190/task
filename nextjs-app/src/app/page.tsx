import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-2 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/purple_bg3.jpg')" }}>
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/purple_bg.jpg')" }}></div>
      <div className="relative z-10 bg-white bg-opacity-75 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4 text-black">Next.js App</h1>
        <Link href="/popup">
          <div className="px-4 py-2 bg-blue-500 text-white rounded mb-2 cursor-pointer transition duration-300 ease-in-out hover:bg-blue-600">
            Go to Popup Page
          </div>
        </Link>
        <Link href="/creative">
          <div className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer transition duration-300 ease-in-out hover:bg-green-600">
            Go to Creative Page
          </div>
        </Link>
      </div>
    </div>
  );
}