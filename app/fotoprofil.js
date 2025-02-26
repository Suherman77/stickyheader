// pages/index.js
'use client'; // Menambahkan 'use client' untuk menandakan kode ini hanya untuk dijalankan di sisi klien

import { useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0', // Latar belakang ringan
      }}
    >
      <div
        style={{
          width: '20vw', // 20% dari lebar layar
          height: '20vw', // Menjaga proporsi gambar tetap bulat
          borderRadius: '50%', // Bentuk bulat
          border: '5px solid white', // Border putih 5px
          boxShadow: isHovered ? '0px 0px 15px rgba(0, 0, 0, 0.3)' : '0px 0px 10px rgba(0, 0, 0, 0.1)', // Box shadow yang lebih besar ketika hover
          transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Membesar ketika hover
          transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Efek transisi untuk pembesaran dan box shadow
          overflow: 'hidden',
        }}
        onMouseEnter={() => setIsHovered(true)} // Ketika cursor berada di atas gambar
        onMouseLeave={() => setIsHovered(false)} // Ketika cursor keluar dari gambar
      >
        <img
          src="/herman.jpeg" // Ganti dengan nama gambar yang benar
          alt="Foto Profil"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Menjaga gambar tetap proporsional
          }}
        />
      </div>
    </div>
  );
}
