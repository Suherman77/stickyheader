"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Header */}
      <nav className="bg-white text-blue-600 shadow-lg">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">My CV</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-lg font-medium">
            <li><a href="#about" className="hover:text-purple-600">About</a></li>
            <li><a href="#contact" className="hover:text-purple-600">Kontak</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <span className="text-2xl">X</span> // Menggunakan teks X untuk toggle
            ) : (
              <span className="text-2xl">☰</span> // Menggunakan simbol ☰ untuk menu
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden bg-white text-blue-600 text-center py-4 space-y-4 font-medium">
            <li><a href="#about" className="block py-2 hover:text-purple-600">About</a></li>
            <li><a href="#contact" className="block py-2 hover:text-purple-600">Kontak</a></li>
          </ul>
        )}
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16">
        <div className="flex justify-center">
          <Image src="/herman.jpeg" alt="Suherman Dermawan" width={160} height={160} className="rounded-full shadow-lg border-4 border-white" priority />
        </div>
        <h1 className="text-3xl font-bold mt-4">Suherman Dermawan</h1>
        <p className="text-white/80 text-lg">Jurusan Komputerisasi Akuntansi</p>
      </section>

      {/* About Section */}
      <section id="about" className="p-6 bg-white shadow-lg rounded-lg text-gray-800">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="mt-2">Hallo! Nama saya Suherman Dermawan, seorang mahasiswa di Ma'soem University yang sedang mendalami bidang Komputerisasi.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-6 mt-4 bg-white shadow-lg rounded-lg text-gray-800">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-2 flex items-center gap-2">Email: hermanjr4623@gmail.com</p>
        <p className="mt-2 flex items-center gap-2">Phone: 089697440278</p>
      </section>

      {/* Footer */}
      <footer className="text-center text-white/80 text-sm py-4 mt-6">
        © {new Date().getFullYear()} Suherman. All rights reserved.
      </footer>
    </div>
  );
}
