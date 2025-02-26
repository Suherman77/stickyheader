'use client'

// app/page.js
import React from "react";

export default function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Curriculum Vitae</h1>
        <p style={styles.subtitle}>Suherman Dermawan</p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Informasi Pribadi</h2>
        <ul style={styles.list}>
          <li><strong>Nama:</strong> Suherman Dermawan</li>
          <li><strong>Kelas:</strong> Mahasiswa</li>
          <li><strong>Prodi:</strong> Komputerisasi Akuntansi</li>
          <li><strong>Alamat:</strong> Jatinangor</li>
          <li><strong>Hobby:</strong> Denger Music</li>
          <li><strong>Cita-cita:</strong> Pengusaha</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Pendidikan</h2>
        <p>
          Saya merupakan mahasiswa dari Universitas Ma'soem jurusan Komputerisasi Akuntansi, 
          dan saat ini sedang menempuh semester 4.
        </p>
      </section>

      <footer style={styles.footer}>
        <p>Terima kasih telah melihat CV saya!</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '36px',
    color: '#333',
  },
  subtitle: {
    fontSize: '22px',
    color: '#555',
    marginTop: '5px',
  },
  section: {
    marginBottom: '30px',
  },
  sectionTitle: {
    fontSize: '24px',
    color: '#444',
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  footer: {
    textAlign: 'center',
    paddingTop: '20px',
    borderTop: '1px solid #ddd',
    marginTop: '20px',
  },
};
