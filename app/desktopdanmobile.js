'use client';

import React from 'react';

export default function Home() {
  const dataMahasiswa = [
    {
      no: 1,
      nim: '232302024',
      nama: 'Suherman Dermawan',
      gender: 'Laki-laki',
      prodi: 'Komputerisasi Akuntansi',
      kelas: 'A',
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
      prodi: 'Komputerisasi Akuntansi',
      kelas: 'B',
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
      prodi: 'Hukum',
      kelas: 'C',
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
      prodi: 'Hukum',
      kelas: 'A',
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
      prodi: 'Syariah',
      kelas: 'B',
      semester: 4,
      alamat: 'Jatinangor',
      hobby: 'Mancing',
      citaCita: 'Pengacara',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className="text-2xl font-semibold text-center mb-6">Data Mahasiswa</h2>

      {/* UI untuk Desktop (Tabel) */}
      <div className="hidden lg:block">
        <table className="min-w-full table-auto border-collapse bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 text-left border">No</th>
              <th className="py-2 px-4 text-left border">NIM</th>
              <th className="py-2 px-4 text-left border">Nama</th>
              <th className="py-2 px-4 text-left border">Gender</th>
              <th className="py-2 px-4 text-left border">Prodi</th>
              <th className="py-2 px-4 text-left border">Kelas</th>
              <th className="py-2 px-4 text-left border">Semester</th>
              <th className="py-2 px-4 text-left border">Alamat</th>
              <th className="py-2 px-4 text-left border">Hobby</th>
              <th className="py-2 px-4 text-left border">Cita-cita</th>
            </tr>
          </thead>
          <tbody>
            {dataMahasiswa.map((item) => (
              <tr key={item.no} className="border-b">
                <td className="py-2 px-4 text-center">{item.no}</td>
                <td className="py-2 px-4 text-center">{item.nim}</td>
                <td className="py-2 px-4">{item.nama}</td>
                <td className="py-2 px-4 text-center">{item.gender}</td>
                <td className="py-2 px-4">{item.prodi}</td>
                <td className="py-2 px-4 text-center">{item.kelas}</td>
                <td className="py-2 px-4 text-center">{item.semester}</td>
                <td className="py-2 px-4">{item.alamat}</td>
                <td className="py-2 px-4">{item.hobby}</td>
                <td className="py-2 px-4">{item.citaCita}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* UI untuk Mobile (Grid System) */}
      <div className="lg:hidden">
        {dataMahasiswa.map((item) => (
          <div key={item.no} className="bg-white shadow-lg rounded-lg p-4 mb-4">
            <div className="grid grid-cols-1 gap-2">
              <div className="flex justify-between">
                <div className="font-semibold text-gray-700">No:</div>
                <div>{item.no}</div>
              </div>
              <div className="flex justify-between">
                <div className="font-semibold text-gray-700">NIM:</div>
                <div>{item.nim}</div>
              </div>
              <div className="flex justify-between">
                <div className="font-semibold text-gray-700">Nama:</div>
                <div>{item.nama}</div>
              </div>
              <div className="flex justify-between">
                <div className="font-semibold text-gray-700">Gender:</div>
                <div>{item.gender}</div>
              </div>
              <div className="flex justify-between">
                <div className="font-semibold text-gray-700">Prodi:</div>
                <div>{item.prodi}</div>
              </div>
              <div className="flex justify-between">
                <div className="font-semibold text-gray-700">Kelas:</div>
                <div>{item.kelas}</div>
              </div>
              <div className="flex justify-between">
                <div className="font-semibold text-gray-700">Semester:</div>
                <div>{item.semester}</div>
              </div>
              <div className="flex justify-between">
                <div className="font-semibold text-gray-700">Alamat:</div>
                <div>{item.alamat}</div>
              </div>
              <div className="flex justify-between">
                <div className="font-semibold text-gray-700">Hobby:</div>
                <div>{item.hobby}</div>
              </div>
              <div className="flex justify-between">
                <div className="font-semibold text-gray-700">Cita-cita:</div>
                <div>{item.citaCita}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
