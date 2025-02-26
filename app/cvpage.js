'use client'; // Untuk memastikan komponen ini di-render di sisi klien

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      {/* Teks "My CV Online" */}
      <div className="logo">
        <h1>My CV Online</h1>
      </div>

      {/* Navigasi Desktop */}
      <nav className="desktop-nav">
        <ul className="nav-list">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/services">Layanan</Link></li>
          <li><Link href="/contact">Kontak</Link></li>
        </ul>
      </nav>

      {/* Icon Toggle Menu (Mobile) */}
      <div className="mobile-nav-toggle" onClick={toggleMenu}>
        <span className="burger-icon">☰</span>
      </div>

      {/* Navigasi Mobile */}
      {isMenuOpen && (
        <nav className="mobile-nav">
          <ul className="nav-list">
            <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link href="/skills" onClick={toggleMenu}>Skills</Link></li>
            <li><Link href="/portfolio" onClick={toggleMenu}>Portfolio</Link></li>
            <li><Link href="/services" onClick={toggleMenu}>Layanan</Link></li>
            <li><Link href="/contact" onClick={toggleMenu}>Kontak</Link></li>
          </ul>
        </nav>
      )}

      {/* Styling untuk desktop dan mobile */}
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          background-color: #333;
          color: #fff;
        }

        .logo h1 {
          margin: 0;
          font-size: 24px;
        }

        .desktop-nav {
          display: flex;
        }

        .nav-list {
          list-style: none;
          display: flex;
          margin: 0;
          padding: 0;
        }

        .nav-list li {
          margin-right: 20px;
        }

        .nav-list li a {
          text-decoration: none;
          color: #fff;
        }

        .mobile-nav-toggle {
          display: none;
          cursor: pointer;
        }

        .burger-icon {
          font-size: 30px;
        }

        /* Responsif untuk Mobile */
        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .mobile-nav-toggle {
            display: block;
          }

          .mobile-nav {
            position: absolute;
            top: 60px;
            right: 20px;
            background-color: #333;
            padding: 20px;
            border-radius: 5px;
            width: 200px;
          }

          .mobile-nav .nav-list {
            flex-direction: column;
          }

          .mobile-nav .nav-list li {
            margin-bottom: 15px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
