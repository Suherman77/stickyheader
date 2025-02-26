'use client';

import React from 'react';

export default function Home() {
  const dataMahasiswa = [
    {
      no: 1,
      nim: '232302024',
      nama: 'Suherman Dermawan',
      gender: 'Laki-laki',
      jurusan: 'Komputerisasi Akuntansi',
      semester: 4,
      alamat: 'Jatinangor',
      hobby: 'Denger Musik',
      citaCita: 'Pengusaha',
    },
    {
      no: 2,
      nim: '232302025',
      nama: 'Diavel',
      gender: 'Laki-laki',
      jurusan: 'Komputerisasi Akuntansi',
      semester: 4,
      alamat: 'Jatinangor',
      hobby: 'Futsal',
      citaCita: 'Pengusaha',
    },
    {
      no: 3,
      nim: '232302026',
      nama: 'Aglia',
      gender: 'Perempuan',
      jurusan: 'Hukum',
      semester: 2,
      alamat: 'Jatinangor',
      hobby: 'Jalan-Jalan',
      citaCita: 'Penyanyi',
    },
    {
      no: 4,
      nim: '232302027',
      nama: 'Aprilia',
      gender: 'Perempuan',
      jurusan: 'Hukum',
      semester: 2,
      alamat: 'Jatinangor',
      hobby: 'Badminton',
      citaCita: 'Artis',
    },
    {
      no: 5,
      nim: '232302028',
      nama: 'Brando',
      gender: 'Laki-laki',
      jurusan: 'Syariah',
      semester: 4,
      alamat: 'Jatinangor',
      hobby: 'Mancing',
      citaCita: 'Pengacara',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Data Mahasiswa</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">No</th>
              <th className="border border-gray-300 px-4 py-2">NIM</th>
              <th className="border border-gray-300 px-4 py-2">Nama</th>
              <th className="border border-gray-300 px-4 py-2">Gender</th>
              <th className="border border-gray-300 px-4 py-2">Jurusan</th>
              <th className="border border-gray-300 px-4 py-2">Semester</th>
              <th className="border border-gray-300 px-4 py-2">Alamat</th>
              <th className="border border-gray-300 px-4 py-2">Hobby</th>
              <th className="border border-gray-300 px-4 py-2">Cita-cita</th>
            </tr>
          </thead>
          <tbody>
            {dataMahasiswa.map((item) => (
              <tr key={item.no} className="bg-white">
                <td className="border border-gray-300 px-4 py-2 text-center">{item.no}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{item.nim}</td>
                <td className="border border-gray-300 px-4 py-2">{item.nama}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{item.gender}</td>
                <td className="border border-gray-300 px-4 py-2">{item.jurusan}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{item.semester}</td>
                <td className="border border-gray-300 px-4 py-2">{item.alamat}</td>
                <td className="border border-gray-300 px-4 py-2">{item.hobby}</td>
                <td className="border border-gray-300 px-4 py-2">{item.citaCita}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
