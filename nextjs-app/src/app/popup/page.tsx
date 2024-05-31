'use client';

import { useState, useEffect } from 'react';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <div className="h-screen flex items-center justify-center items-center justify-center min-h-screen py-2 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/purple_bg3.jpg')" }}>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded transition duration-300 ease-in-out text-black"
      >
        Click for a quote
      </button>
      <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} />
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-lg font-bold text-black">Quote of the day</h2>
            <p className="mt-2 text-black">Code is like humor. When you have to explain it, it’s bad 😒</p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;